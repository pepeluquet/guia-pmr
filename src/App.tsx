import { SiteHeader } from './components/SiteHeader';
import { AssistanceSection, ComplaintsSection, DefinitionSection, HeroSection, JourneySection, QuizSection, RegulationsSection, SiteFooter, SourcesSection } from './components/GuideSections';
import { guide } from './content/guide';

// Página única: el orden de los componentes reproduce el recorrido de lectura.
function App() {
  return (
    <>
      <a className="skip-link" href="#contenido" data-testid="link-skip-content">{guide.accessibility.skip}</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <HeroSection />
        <DefinitionSection />
        <AssistanceSection />
        {/* El cuestionario va justo después de "Cómo pedir asistencia". */}
        <QuizSection />
        <JourneySection />
        <RegulationsSection />
        {/* "Si algo salió mal" va antes de las fuentes. */}
        <ComplaintsSection />
        <SourcesSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
