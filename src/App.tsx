import { SiteHeader } from './components/SiteHeader';
import { DefinitionSection, HeroSection, JourneySection, RegulationsSection, SiteFooter, SourcesSection } from './components/GuideSections';
import { guide } from './content/guide';

// Página única: el orden de los componentes sigue los capítulos del trabajo
// y tiene que coincidir con el orden del menú (guide.navigation).
function App() {
  return (
    <>
      <a className="skip-link" href="#contenido" data-testid="link-skip-content">{guide.accessibility.skip}</a>
      <SiteHeader />
      <main id="contenido" tabIndex={-1}>
        <HeroSection />
        <DefinitionSection />
        <RegulationsSection />
        <JourneySection />
        <SourcesSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
