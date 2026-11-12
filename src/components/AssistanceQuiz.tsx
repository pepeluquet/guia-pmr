import { useEffect, useRef, useState } from 'react';
import { RotateCcw, TriangleAlert } from 'lucide-react';
import { guide, type QuizStepId, type QuizTarget } from '../content/guide';

// El cuestionario avanza por "pasos". Cada pregunta de Sí/No es un paso,
// después viene la pregunta de apoyos extra y al final el resultado.
type Step = QuizStepId | 'extra' | 'result';
// Códigos de movilidad que puede dar el recorrido de preguntas de Sí/No.
type MobilityCode = 'WCHR' | 'WCHS' | 'WCHC';

const NONE = 'NONE'; // Valor interno de la opción "Ninguno".

// Une los códigos como se dice en castellano: "WCHR", "WCHR y BLND", "WCHR, BLND y DEAF".
const listFormat = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });

export function AssistanceQuiz() {
  const c = guide.quiz;

  // Estado del cuestionario: el paso actual, el código de movilidad (si surgió uno)
  // y los apoyos extra marcados en la última pregunta.
  const [step, setStep] = useState<Step>('walk');
  const [mobility, setMobility] = useState<MobilityCode | null>(null);
  const [extras, setExtras] = useState<string[]>([]);
  // Cantidad de preguntas respondidas, para mostrar "Pregunta 1", "Pregunta 2", etc.
  const [answered, setAnswered] = useState(0);

  // Referencia al título del paso actual: cuando el paso cambia, movemos el foco
  // ahí para que quien usa teclado o lector de pantalla siga desde la nueva pregunta.
  const headingRef = useRef<HTMLHeadingElement>(null);
  // Evita mover el foco al cargar la página: solo lo hacemos después de una respuesta.
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (hasInteracted.current) headingRef.current?.focus();
  }, [step]);

  // Responde una pregunta de Sí/No: el destino puede ser otra pregunta o un código.
  function answer(target: QuizTarget) {
    hasInteracted.current = true;
    setAnswered(value => value + 1);
    if (target === 'WCHR' || target === 'WCHS' || target === 'WCHC') {
      setMobility(target);
      setStep('extra'); // La pregunta de apoyos extra siempre va al final.
    } else {
      setStep(target);
    }
  }

  // "Ninguno" es excluyente: si se marca, desmarca el resto, y viceversa.
  function toggleExtra(code: string) {
    setExtras(current => {
      if (code === NONE) return current.includes(NONE) ? [] : [NONE];
      const withoutNone = current.filter(item => item !== NONE);
      return withoutNone.includes(code) ? withoutNone.filter(item => item !== code) : [...withoutNone, code];
    });
  }

  function restart() {
    hasInteracted.current = true;
    setStep('walk');
    setMobility(null);
    setExtras([]);
    setAnswered(0);
  }

  // Códigos finales: primero el de movilidad y después los apoyos extra, sin "Ninguno".
  const codes = [...(mobility ? [mobility] : []), ...extras.filter(code => code !== NONE)];
  const codeList = listFormat.format(codes);
  // Texto que se anuncia a los lectores de pantalla cuando aparece el resultado.
  const announcement = step === 'result'
    ? (codes.length ? c.announcement.replace('{codigos}', codeList) : c.announcementNone)
    : '';

  const question = c.questions.find(item => item.id === step);

  return (
    <div className="quiz-card" data-testid="quiz-card">
      {/* Región "viva": los lectores de pantalla leen su contenido cada vez que cambia. */}
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>

      {question && (
        <div className="quiz-step">
          <span className="micro">{c.questionLabel} {answered + 1}</span>
          <h3 ref={headingRef} tabIndex={-1} id="quiz-question">{question.text}</h3>
          <div className="quiz-answers" role="group" aria-labelledby="quiz-question">
            <button type="button" className="quiz-button" onClick={() => answer(question.yes)} data-testid="button-quiz-yes">{c.yes}</button>
            <button type="button" className="quiz-button" onClick={() => answer(question.no)} data-testid="button-quiz-no">{c.no}</button>
          </div>
        </div>
      )}

      {step === 'extra' && (
        <div className="quiz-step">
          <span className="micro">{c.questionLabel} {answered + 1}</span>
          {/* fieldset + legend agrupan las casillas bajo la pregunta para los lectores de pantalla. */}
          <fieldset className="quiz-fieldset">
            <legend><h3 ref={headingRef} tabIndex={-1}>{c.extraQuestion}</h3></legend>
            <p className="quiz-hint">{c.extraHint}</p>
            <div className="quiz-options">
              {[...c.extraOptions.map(option => ({ value: option.code, label: `${option.label} (${option.code})` })), { value: NONE, label: c.noneOption }].map(option => (
                <label className="quiz-option" key={option.value}>
                  <input type="checkbox" checked={extras.includes(option.value)} onChange={() => toggleExtra(option.value)} data-testid={`checkbox-quiz-${option.value}`} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <button type="button" className="quiz-button primary" onClick={() => { hasInteracted.current = true; setStep('result'); }} data-testid="button-quiz-result">{c.showResult}</button>
        </div>
      )}

      {step === 'result' && (
        <div className="quiz-step quiz-result" data-testid="quiz-result">
          <h3 ref={headingRef} tabIndex={-1}>{c.resultTitle}</h3>
          {codes.length ? (
            <>
              <ul className="quiz-codes">
                {codes.map(code => (
                  <li key={code}>
                    <span className="table-code">{code}</span>
                    {/* La explicación sale de la tabla de códigos SSR del archivo de datos. */}
                    <p>{guide.assistance.codes.find(item => item.code === code)?.meaning}</p>
                  </li>
                ))}
              </ul>
              <h4>{c.sayTitle}</h4>
              {/* Elegimos la frase en singular o plural según la cantidad de códigos. */}
              <p className="quiz-say">{(codes.length > 1 ? c.sayTemplatePlural : c.sayTemplate).replace('{codigos}', codeList)}</p>
            </>
          ) : (
            <p>{c.noCodesResult}</p>
          )}
          <div className="quiz-warning" role="note">
            <TriangleAlert aria-hidden="true" />
            <p><strong>{c.warning}</strong></p>
          </div>
          <button type="button" className="quiz-button" onClick={restart} data-testid="button-quiz-restart">
            <RotateCcw aria-hidden="true" />{c.restart}
          </button>
        </div>
      )}
    </div>
  );
}
