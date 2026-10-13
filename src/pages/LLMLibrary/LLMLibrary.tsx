import Sidebar from "../../components/Sidebars/Sidebar";
import "./llmlibrary.css"

function LLMLibrary() {
  return (
    <>
      {/* icon sprite */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <symbol id="i-customize" viewBox="0 0 16 16"><path d="M2 4.5h2.5M7.5 4.5H14M2 11.5h6.5M11.5 11.5H14" /><circle cx="6" cy="4.5" r="1.5" /><circle cx="10" cy="11.5" r="1.5" /></symbol>
          <symbol id="i-search" viewBox="0 0 16 16"><circle cx="7.1" cy="7.1" r="4.7" /><path d="M10.6 10.6 14 14" /></symbol>
          <symbol id="i-pin" viewBox="0 0 16 16"><path d="m9.6 2.5 4 4-1.5.7-1.5 1.6.2 2.2-1 1-2.7-2.7-3.4 3.4a.4.4 0 0 1-.6-.6l3.4-3.4-2.6-2.6 1-1 2.2.2 1.7-1.5z" /></symbol>
          <symbol id="i-folder" viewBox="0 0 16 16"><path d="M3.5 3h9M2.4 5.5h11.2l-1.1 7.3H3.6z" /><path d="M6.2 8h3.6" /></symbol>
          <symbol id="i-toggle" viewBox="0 0 16 16"><rect x="2.3" y="2.8" width="11.4" height="10.4" rx="2.6" /><path d="M5.6 5.7v4.6" /></symbol>
          <symbol id="i-gear" viewBox="0 0 16 16"><path d="M13.28 8.00 L13.31 7.72 L13.39 7.43 L13.51 7.13 L13.65 6.80 L13.80 6.45 L13.92 6.08 L14.00 5.70 L14.01 5.32 L13.96 4.97 L13.82 4.64 L13.61 4.36 L13.33 4.13 L12.99 3.96 L12.62 3.84 L12.24 3.76 L11.87 3.71 L11.51 3.67 L11.18 3.62 L10.89 3.54 L10.64 3.43 L10.41 3.26 L10.20 3.05 L10.00 2.79 L9.79 2.51 L9.55 2.20 L9.29 1.91 L9.00 1.66 L8.69 1.45 L8.35 1.32 L8.00 1.28 L7.65 1.32 L7.31 1.45 L7.00 1.66 L6.71 1.91 L6.45 2.20 L6.21 2.51 L6.00 2.79 L5.80 3.05 L5.59 3.26 L5.36 3.43 L5.11 3.54 L4.82 3.62 L4.49 3.67 L4.13 3.71 L3.76 3.76 L3.38 3.84 L3.01 3.96 L2.67 4.13 L2.39 4.36 L2.18 4.64 L2.04 4.97 L1.99 5.32 L2.00 5.70 L2.08 6.08 L2.20 6.45 L2.35 6.80 L2.49 7.13 L2.61 7.43 L2.69 7.72 L2.72 8.00 L2.69 8.28 L2.61 8.57 L2.49 8.87 L2.35 9.20 L2.20 9.55 L2.08 9.92 L2.00 10.30 L1.99 10.68 L2.04 11.03 L2.18 11.36 L2.39 11.64 L2.67 11.87 L3.01 12.04 L3.38 12.16 L3.76 12.24 L4.13 12.29 L4.49 12.33 L4.82 12.38 L5.11 12.46 L5.36 12.57 L5.59 12.74 L5.80 12.95 L6.00 13.21 L6.21 13.49 L6.45 13.80 L6.71 14.09 L7.00 14.34 L7.31 14.55 L7.65 14.68 L8.00 14.72 L8.35 14.68 L8.69 14.55 L9.00 14.34 L9.29 14.09 L9.55 13.80 L9.79 13.49 L10.00 13.21 L10.20 12.95 L10.41 12.74 L10.64 12.57 L10.89 12.46 L11.18 12.38 L11.51 12.33 L11.87 12.29 L12.24 12.24 L12.62 12.16 L12.99 12.04 L13.33 11.87 L13.61 11.64 L13.82 11.36 L13.96 11.03 L14.01 10.68 L14.00 10.30 L13.92 9.92 L13.80 9.55 L13.65 9.20 L13.51 8.87 L13.39 8.57 L13.31 8.28Z" /><circle cx="8" cy="8" r="2" /></symbol>
          <symbol id="i-chev" viewBox="0 0 10 6"><path d="M1 1.3 5 5 9 1.3" /></symbol>
          <symbol id="i-chip" viewBox="0 0 16 16"><rect x="4" y="4" width="8" height="8" rx="1.6" /><path d="M6.5 1.8V4M9.5 1.8V4M6.5 12v2.2M9.5 12v2.2M1.8 6.5H4M1.8 9.5H4M12 6.5h2.2M12 9.5h2.2" /></symbol>
          <symbol id="i-download" viewBox="0 0 16 16"><path d="M8 2.5v7.6M4.6 7 8 10.4 11.4 7M3 13h10" /></symbol>
          <symbol id="i-deepseek" viewBox="0 0 24 24"><path fill="#4D6BFE" d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 0 1-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 0 0-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 0 1-.465.137 9.597 9.597 0 0 0-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 0 0 1.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 0 1 1.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 0 1 .415-.287.302.302 0 0 1 .2.288.306.306 0 0 1-.31.307.303.303 0 0 1-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 0 1-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 0 1 .016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 0 1-.254-.078.253.253 0 0 1-.114-.358c.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z" /></symbol>
          <symbol id="i-qwen" viewBox="0 0 24 24"><path fill="#615CED" fillRule="evenodd" d="M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z" /></symbol>
          <symbol id="i-kimi" viewBox="0 0 512 512"><g fillRule="evenodd" clipRule="evenodd"><path fill="#000" d="M503 114.333v280c0 60.711-49.29 110-110 110H113c-60.711 0-110-49.289-110-110v-280c0-60.71 49.289-110 110-110h280c60.71 0 110 49.29 110 110z" /><path d="M342.065 189.759c1.886-2.42 3.541-4.63 5.289-6.77.81-1.007.74-1.771-.046-2.824-7.58-9.965-8.298-21.028-3.935-32.254 3.275-8.448 10.52-12.406 19.373-13.25 5.52-.521 10.936.046 15.959 2.73 6.596 3.53 10.438 8.912 11.688 16.341.995 5.926.81 11.712-.868 17.452-2.974 10.161-10.277 15.427-20.287 16.758-8.31 1.11-16.734 1.25-25.113 1.817-.648.046-1.308 0-2.06 0z" fill="#027aff" /><path d="M321.512 144.254h-50.064l-39.637 90.384h-56.036v-89.99H131v232.868h44.787v-98.103h78.973c13.598 0 26.015-7.927 31.744-20.252v118.355h44.787v-98.103c0-23.342-18.239-42.97-41.523-44.671v-.116h-24.593a45.577 45.577 0 0026.884-24.534l29.453-65.838z" fill="#fff" /></g></symbol>
          <symbol id="i-zai" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12.105 2L9.927 4.953H.653L2.83 2h9.276zM23.254 19.048L21.078 22h-9.242l2.174-2.952h9.244zM24 2L9.264 22H0L14.736 2H24z" /></symbol>
        </defs>
      </svg>

      <div className="app">

        <Sidebar />

        {/* ===== main ===== */}
        <main className="main">
          <header className="top">
            <label className="sidebar-open" htmlFor="sb-toggle" aria-label="Open sidebar" title="Open sidebar"><svg className="ic"><use href="#i-toggle" /></svg></label>
            <button type="button" className="header-search" aria-label="Search" title="Search"><svg className="ic"><use href="#i-search" /></svg></button>
            <h1>LLMs</h1>
          </header>

          <section className="llm-view" aria-label="LLMs">
            <div className="llm-inner">

              {/* CSS-only state: provider filter */}
              <input type="radio" name="provider" id="p-all" defaultChecked />
              <input type="radio" name="provider" id="p-deepseek" />
              <input type="radio" name="provider" id="p-qwen" />
              <input type="radio" name="provider" id="p-kimi" />
              <input type="radio" name="provider" id="p-zai" />
              {/* CSS-only state: tabs */}
              <input type="radio" name="tab" id="tab-discover" defaultChecked />
              <input type="radio" name="tab" id="tab-downloaded" />

              <div className="llm-title">LLMs</div>
              <p className="llm-sub">Search and download open-source language models.</p>

              <label className="llm-search">
                <svg className="ic" aria-hidden="true"><use href="#i-search" /></svg>
                <input type="search" placeholder="Search models on Hugging Face…" aria-label="Search models" autoComplete="off" spellCheck="false" />
              </label>

              <div className="chips" role="group" aria-label="Provider">
                <label className="chip" htmlFor="p-all">All</label>
                <label className="chip" htmlFor="p-deepseek"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek" /></svg>DeepSeek</label>
                <label className="chip" htmlFor="p-qwen"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg>Qwen</label>
                <label className="chip" htmlFor="p-kimi"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi" /></svg>Kimi</label>
                <label className="chip" htmlFor="p-zai"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai" /></svg>Z.ai</label>
              </div>

              <div className="llm-tabs">
                <label htmlFor="tab-discover">Discover</label>
                <label htmlFor="tab-downloaded">Downloaded<span className="count"></span></label>
              </div>

              <div className="llm-status status-discover">Featured open-source models</div>
              <div className="llm-status status-downloaded">Nothing downloaded yet. Find a model in Discover.</div>

              <div className="llm-list">

                <div className="llm-row" data-p="deepseek">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">DeepSeek V3.2</div>
                    <div className="llm-meta">Chat · Reasoning · Tools · 671B MoE · MIT</div>
                    <div className="llm-desc">Latest DeepSeek flagship for chat, reasoning and tool use.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="deepseek">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">DeepSeek R1</div>
                    <div className="llm-meta">Reasoning · 671B MoE · MIT</div>
                    <div className="llm-desc">Reasoning-first model that thinks step by step before it answers.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="deepseek">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">DeepSeek R1 Distill Qwen 32B</div>
                    <div className="llm-meta">Reasoning · 32B dense · MIT</div>
                    <div className="llm-desc">R1 reasoning distilled into a 32B model that is practical to run locally.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="qwen">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Qwen3 235B</div>
                    <div className="llm-meta">Chat · Reasoning · 235B MoE · 22B active · Apache-2.0</div>
                    <div className="llm-desc">Largest open Qwen3 with switchable thinking and non-thinking modes.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="qwen">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Qwen3 32B</div>
                    <div className="llm-meta">Chat · Reasoning · 32B dense · Apache-2.0</div>
                    <div className="llm-desc">Strong all-rounder for local use, with a thinking mode.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="qwen">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Qwen3 8B</div>
                    <div className="llm-meta">Chat · 8B dense · Apache-2.0</div>
                    <div className="llm-desc">Compact model that runs on consumer hardware.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="qwen">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Qwen3 Coder 480B</div>
                    <div className="llm-meta">Coding · Tools · 480B MoE · 35B active · Apache-2.0</div>
                    <div className="llm-desc">Agentic coding model built for large repositories and long context.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="qwen">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Qwen3 Coder 30B</div>
                    <div className="llm-meta">Coding · 30B MoE · 3B active · Apache-2.0</div>
                    <div className="llm-desc">Lightweight coding model for fast local completions and edits.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="kimi">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Kimi K2</div>
                    <div className="llm-meta">Tools · 1T MoE · 32B active · Modified MIT</div>
                    <div className="llm-desc">Trillion-parameter MoE tuned for agentic work and tool calling.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="kimi">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">Kimi K2 Thinking</div>
                    <div className="llm-meta">Reasoning · Tools · 1T MoE · 32B active · Modified MIT</div>
                    <div className="llm-desc">Reasoning variant of Kimi K2 that thinks between tool calls.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="zai">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">GLM 4.6</div>
                    <div className="llm-meta">Coding · Tools · 355B MoE · 32B active · MIT</div>
                    <div className="llm-desc">Z.ai flagship for agents and coding with a long context window.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

                <div className="llm-row" data-p="zai">
                  <div className="llm-tile"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai" /></svg></div>
                  <div className="llm-info">
                    <div className="llm-name">GLM 4.5 Air</div>
                    <div className="llm-meta">Chat · 106B MoE · 12B active · MIT</div>
                    <div className="llm-desc">Lighter GLM 4.5 that balances quality and cost.</div>
                  </div>
                  <div className="llm-actions"><button type="button" className="dl-btn"><svg className="ic" aria-hidden="true"><use href="#i-download" /></svg>Download</button></div>
                </div>

              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  );
}

export default LLMLibrary