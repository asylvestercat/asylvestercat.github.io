import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import LaptopSVG from "@/assets/laptop.svg";
import styles from "./page.module.css";

export const metadata = { title: "Baymax CMS — Disney" };

export default function Disney() {
  return (
    <>
      <Hero>
        <div className={styles.laptopWrapper}>
          <LaptopSVG className={styles.laptop} />
          <div className={styles.screenContainer}>
            <Image
              src="/screenshots/baymax-cms-1.png"
              alt="Baymax CMS screenshot"
              fill
              sizes="(max-width: 840px) 76vw, 638px"
              style={{ objectFit: "cover", objectPosition: "left top" }}
            />
          </div>
        </div>
      </Hero>

      {/* Project meta */}
      <section className={styles.meta}>
        <div className={styles.metaInner}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Company</span>
            <span className={styles.metaValue}>The Walt Disney Company</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>Frontend Engineer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Stack</span>
            <span className={styles.metaValue}>Next.js · React · TypeScript · SCSS</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Scale</span>
            <span className={styles.metaValue}>12,000 concurrent users (D23)</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>01</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.lead}>
              Baymax is an internal content management system built for The Walt Disney Company. It powers event websites — including D23, Disney's flagship fan convention — and was later adopted by the Walt Disney Archives.
            </p>
            <p>
              The system gives content editors the ability to build and publish full event pages without touching code. Behind the scenes, it's two separate Next.js repositories talking to a shared AWS backend: one for authoring, one for rendering. What makes it interesting architecturally is how much of the editor UI generates itself from configuration schemas — a pattern that let the system scale to 23 content modules without the editor codebase growing proportionally.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Two-Repo Architecture</h2>
            <p>
              The system is split into two repositories that never communicate directly. Both talk to the same AWS backend through API Gateway, but they serve completely different purposes and audiences.
            </p>

            <div className={styles.archDiagram}>
              <div className={styles.archBox}>
                <span className={styles.archBoxLabel}>baymax-cms</span>
                <span className={styles.archBoxDesc}>Authoring tool for content editors. 23-component library, schema-driven editor UI, WYSIWYG editor, session state management.</span>
              </div>
              <div className={styles.archArrow}>⟷</div>
              <div className={styles.archBox}>
                <span className={styles.archBoxLabel}>AWS Backend</span>
                <span className={styles.archBoxDesc}>API Gateway → Lambda → S3 + DynamoDB. Auth via OneID SSO + ARC gateway. CloudFront CDN for public reads.</span>
              </div>
              <div className={styles.archArrow}>⟷</div>
              <div className={styles.archBox}>
                <span className={styles.archBoxLabel}>baymax-frontend</span>
                <span className={styles.archBoxDesc}>Public-facing site. Next.js App Router with [slug] dynamic routes, ISR, on-demand revalidation on publish.</span>
              </div>
            </div>

            <p>
              This separation means editor traffic — internal, low volume — is completely decoupled from public traffic. During D23, spikes in public reads had zero impact on the CMS. The frontend serves pre-built static HTML from CloudFront edge locations; most user requests never reach the origin.
            </p>
          </div>
        </div>
      </section>

      {/* Config-driven system */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>The Config-Driven Editor</h2>
            <p className={styles.lead}>
              The most architecturally interesting part of Baymax is what it doesn't have: custom editor UIs. Instead of hand-building a form for each of the 23 content types, the editor generates itself from schemas.
            </p>

            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <h3 className={styles.stepTitle}>Schema defines the module</h3>
                  <p>Each component has a config file (e.g. <code>appCTAConfig.ts</code>) that declares its title, component name, thumbnail, and a <code>properties</code> array — a nested schema describing every editable field.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <h3 className={styles.stepTitle}>Properties map to editor widgets</h3>
                  <p>Each property specifies a component type (<code>FileUploader</code>, <code>Wysiwyg</code>, <code>Form</code>), accepted options, and validation rules. The editor reads these and renders the right widget — no custom UI code needed per module.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <h3 className={styles.stepTitle}>Shared boilerplate via spread</h3>
                  <p>Common fields — SEO settings, visibility toggles, scheduling — are defined once in <code>boilerPlateProperties</code> and spread into every module config. Eliminates duplication across all 23 components.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>4</span>
                <div>
                  <h3 className={styles.stepTitle}>Central registry</h3>
                  <p>All configs are imported and exported from <code>module-configs/index.ts</code> as a single object mapping component names to schemas. The frontend's <code>/modules</code> folder has a matching renderer for each.</p>
                </div>
              </div>
            </div>

            <div className={styles.callout}>
              Adding a new content type requires zero changes to the editor framework. Write a config schema, a CMS preview component, a frontend renderer, and register it. The editor UI builds itself.
            </div>
          </div>
        </div>
      </section>

      {/* Component library */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>04</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>23 Modules</h2>
            <p>The component library covers the full spectrum of content needs for event and archival sites. Every module is config-driven, schema-validated, and independently renderable.</p>

            <div className={styles.moduleGrid}>
              <div className={styles.moduleCategory}>
                <h3 className={styles.moduleCategoryTitle}>Content & Layout</h3>
                <ul className={styles.moduleList}>
                  <li>TextBlock</li>
                  <li>Wysiwyg</li>
                  <li>WysiwygShell</li>
                  <li>SideBySideGroup</li>
                  <li>Triptych</li>
                  <li>Accordion</li>
                  <li>Timeline</li>
                </ul>
              </div>
              <div className={styles.moduleCategory}>
                <h3 className={styles.moduleCategoryTitle}>Headers & Nav</h3>
                <ul className={styles.moduleList}>
                  <li>SimpleHeader</li>
                  <li>LandingHeader</li>
                  <li>InteractiveHeader</li>
                  <li>LinkBlock</li>
                </ul>
              </div>
              <div className={styles.moduleCategory}>
                <h3 className={styles.moduleCategoryTitle}>Media</h3>
                <ul className={styles.moduleList}>
                  <li>SingleImageBlock</li>
                  <li>VideoBlock</li>
                  <li>EmbedIframe</li>
                  <li>EmbedYoutube</li>
                  <li>PrimaryAnimation</li>
                </ul>
              </div>
              <div className={styles.moduleCategory}>
                <h3 className={styles.moduleCategoryTitle}>Interactive</h3>
                <ul className={styles.moduleList}>
                  <li>Countdown</li>
                  <li>ScheduleEmbed</li>
                  <li>SignUpContent</li>
                  <li>AppCTA</li>
                </ul>
              </div>
              <div className={styles.moduleCategory}>
                <h3 className={styles.moduleCategoryTitle}>Branding</h3>
                <ul className={styles.moduleList}>
                  <li>LogoGrid</li>
                  <li>Sponsors</li>
                  <li>MultiCard</li>
                </ul>
              </div>
            </div>

            <p className={styles.moduleNote}>
              The WYSIWYG editor is split into two components by design: <code>Wysiwyg</code> is the core editor in vanilla JavaScript (framework-agnostic, independently testable), and <code>WysiwygShell</code> is the React wrapper that handles lifecycle, state sync, and debounced persistence to sessionStorage.
            </p>
          </div>
        </div>
      </section>

      {/* Publish pipeline */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>05</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>From Edit to Live</h2>
            <p>
              Before anything hits a pipeline, editors work inside a page management interface that surfaces the full site structure at a glance. Every page in the CMS has a status — published, draft, or unpublished — and the interface shows who authored each one.
            </p>

            <div className={styles.screenshotWrapper}>
              <Image
                src="/screenshots/baymax-cms-2.png"
                alt="Baymax CMS page listing — published pages with author, lock, and unpublish controls"
                width={1600}
                height={900}
                className={styles.screenshot}
                loading="eager"
                unoptimized
              />
              <p className={styles.caption}>
                The CMS page listing view. Pages under the Published category are live on the CDN. Each card surfaces the page slug, author, and available actions. Editors can lock a page to prevent concurrent edits, or unpublish it to pull it from the frontend without deleting the content — a safe rollback without touching the pipeline.
              </p>
            </div>

            <p>
              The CMS tracks editor state using sessionStorage — three keys that represent the published baseline, the working draft, and publish status. SessionStorage clears when the tab closes, which prevents stale drafts from persisting and avoids conflicts when the same page is open in multiple tabs.
            </p>
            <p>
              When an editor hits publish, the data flows through a defined pipeline:
            </p>

            <div className={styles.pipeline}>
              <div className={styles.pipelineStep}>
                <span className={styles.pipelineNum}>1</span>
                <div className={styles.pipelineText}>
                  <strong>Serialize</strong> — Editor state is serialized to a JSON payload representing the full page structure and all module data.
                </div>
              </div>
              <div className={styles.pipelineStep}>
                <span className={styles.pipelineNum}>2</span>
                <div className={styles.pipelineText}>
                  <strong>API call</strong> — A fetch request sends the JSON to the backend via <code>NEXT_API_PATH</code>, proxied through Next.js rewrites to hide the API Gateway URL and avoid CORS.
                </div>
              </div>
              <div className={styles.pipelineStep}>
                <span className={styles.pipelineNum}>3</span>
                <div className={styles.pipelineText}>
                  <strong>Lambda processes</strong> — API Gateway routes to a Lambda function that validates and writes content to S3 (content and assets) and DynamoDB (metadata and indexing).
                </div>
              </div>
              <div className={styles.pipelineStep}>
                <span className={styles.pipelineNum}>4</span>
                <div className={styles.pipelineText}>
                  <strong>Cache invalidation</strong> — <code>revalidationProcess.ts</code> calls the "removeChip" endpoint with the specific path, triggering CloudFront cache clearing and Next.js on-demand ISR. Only the affected page regenerates — no full site rebuild.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>06</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Scaling for D23</h2>
            <div className={styles.statCallout}>
              <span className={styles.statNumber}>12,000</span>
              <span className={styles.statLabel}>concurrent users at peak D23 traffic</span>
            </div>
            <p>
              For an event like D23, the traffic profile is extreme and predictable: a hard spike at announcement time, then a long tail of engaged fans browsing content. The architecture was designed around that reality.
            </p>

            <div className={styles.scaleTable}>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>CloudFront CDN</span>
                <span className={styles.scaleDesc}>Published pages served from edge locations globally. For a read-heavy event site, this is the primary scaling mechanism — most requests never hit the origin.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>ISR</span>
                <span className={styles.scaleDesc}>Pages pre-built as static HTML via <code>generateStaticParams</code> + a page manifest. On-demand revalidation means only changed pages regenerate on publish.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>Lambda</span>
                <span className={styles.scaleDesc}>Auto-scales with request volume. No server provisioning. Cold starts are more noticeable on the CMS (low traffic) than the CDN-served frontend.</span>
              </div>
              <div className={styles.scaleRow}>
                <span className={styles.scaleItem}>CMS isolation</span>
                <span className={styles.scaleDesc}>Editor traffic and public traffic are completely decoupled. A traffic spike on the public site has zero impact on the authoring tool.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>07</div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>What I'd Do Differently</h2>
            <p>
              Baymax shipped and scaled. But with hindsight, there are places I'd push harder.
            </p>

            <div className={styles.reflections}>
              <div className={styles.reflection}>
                <h3>Infrastructure as Code</h3>
                <p>AWS resources were provisioned manually, outside the repos. Adding CDK or Terraform would make the infrastructure version-controlled, reproducible, and auditable — a real gap for a production system at this scale.</p>
              </div>
              <div className={styles.reflection}>
                <h3>Testing coverage</h3>
                <p>The project shipped with two test files. The highest-value additions would be unit tests for module configs and schemas, integration tests for the publish pipeline, and render tests for all 23 modules.</p>
              </div>
              <div className={styles.reflection}>
                <h3>CSS Modules</h3>
                <p>Styles are global SCSS organized by component convention. That works at 23 modules, but specificity conflicts become a real problem at scale. CSS Modules would enforce isolation and make the component library more maintainable as it grows.</p>
              </div>
              <div className={styles.reflection}>
                <h3>Optimistic UI</h3>
                <p>Save and publish operations wait for the full API round-trip before updating the UI. An optimistic update pattern — show the result immediately, roll back on failure — would make the editor feel significantly faster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
