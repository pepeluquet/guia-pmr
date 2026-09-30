import { SiteHeader } from './components/SiteHeader';
import { AssistanceSection, DefinitionSection, HeroSection, JourneySection, RegulationsSection, SiteFooter, SourcesSection } from './components/GuideSections';
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
        <JourneySection />
        <RegulationsSection />
        <SourcesSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;