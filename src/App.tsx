import './App.css';

export default function App() {
  return (
    <>
      {/* icon sprite */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <symbol id="i-customize" viewBox="0 0 16 16"><path d="M2 4.5h2.5M7.5 4.5H14M2 11.5h6.5M11.5 11.5H14"/><circle cx="6" cy="4.5" r="1.5"/><circle cx="10" cy="11.5" r="1.5"/></symbol>
          <symbol id="i-artifacts" viewBox="0 0 16 16"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M2.5 6h11M6 6v7.5"/></symbol>
          <symbol id="i-compose" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#353530" stroke="none"/><path d="M12 7v10M7 12h10" stroke="#d0d0c7" strokeWidth="1.6" strokeLinecap="round"/></symbol>
          <symbol id="i-search" viewBox="0 0 16 16"><circle cx="7.1" cy="7.1" r="4.7"/><path d="M10.6 10.6 14 14"/></symbol>
          <symbol id="i-pin" viewBox="0 0 16 16"><path d="m9.6 2.5 4 4-1.5.7-1.5 1.6.2 2.2-1 1-2.7-2.7-3.4 3.4a.4.4 0 0 1-.6-.6l3.4-3.4-2.6-2.6 1-1 2.2.2 1.7-1.5z"/></symbol>
          <symbol id="i-folder" viewBox="0 0 16 16"><path d="M3.5 3h9M2.4 5.5h11.2l-1.1 7.3H3.6z"/><path d="M6.2 8h3.6"/></symbol>
          <symbol id="i-folder-plus" viewBox="0 0 16 16"><path d="M3.5 3h9M13.2 7l.4-1.5H2.4l1.2 7.3h4.2M12 9v5M9.5 11.5h5"/></symbol>
          <symbol id="i-filter" viewBox="0 0 16 16"><path d="M2.5 4.4h11M4.4 8h7.2M6.4 11.6h3.2"/></symbol>
          <symbol id="i-toggle" viewBox="0 0 16 16"><rect x="2.3" y="2.8" width="11.4" height="10.4" rx="2.6"/><path d="M5.6 5.7v4.6"/></symbol>
          <symbol id="i-gear" viewBox="0 0 16 16"><path d="M13.28 8.00 L13.31 7.72 L13.39 7.43 L13.51 7.13 L13.65 6.80 L13.80 6.45 L13.92 6.08 L14.00 5.70 L14.01 5.32 L13.96 4.97 L13.82 4.64 L13.61 4.36 L13.33 4.13 L12.99 3.96 L12.62 3.84 L12.24 3.76 L11.87 3.71 L11.51 3.67 L11.18 3.62 L10.89 3.54 L10.64 3.43 L10.41 3.26 L10.20 3.05 L10.00 2.79 L9.79 2.51 L9.55 2.20 L9.29 1.91 L9.00 1.66 L8.69 1.45 L8.35 1.32 L8.00 1.28 L7.65 1.32 L7.31 1.45 L7.00 1.66 L6.71 1.91 L6.45 2.20 L6.21 2.51 L6.00 2.79 L5.80 3.05 L5.59 3.26 L5.36 3.43 L5.11 3.54 L4.82 3.62 L4.49 3.67 L4.13 3.71 L3.76 3.76 L3.38 3.84 L3.01 3.96 L2.67 4.13 L2.39 4.36 L2.18 4.64 L2.04 4.97 L1.99 5.32 L2.00 5.70 L2.08 6.08 L2.20 6.45 L2.35 6.80 L2.49 7.13 L2.61 7.43 L2.69 7.72 L2.72 8.00 L2.69 8.28 L2.61 8.57 L2.49 8.87 L2.35 9.20 L2.20 9.55 L2.08 9.92 L2.00 10.30 L1.99 10.68 L2.04 11.03 L2.18 11.36 L2.39 11.64 L2.67 11.87 L3.01 12.04 L3.38 12.16 L3.76 12.24 L4.13 12.29 L4.49 12.33 L4.82 12.38 L5.11 12.46 L5.36 12.57 L5.59 12.74 L5.80 12.95 L6.00 13.21 L6.21 13.49 L6.45 13.80 L6.71 14.09 L7.00 14.34 L7.31 14.55 L7.65 14.68 L8.00 14.72 L8.35 14.68 L8.69 14.55 L9.00 14.34 L9.29 14.09 L9.55 13.80 L9.79 13.49 L10.00 13.21 L10.20 12.95 L10.41 12.74 L10.64 12.57 L10.89 12.46 L11.18 12.38 L11.51 12.33 L11.87 12.29 L12.24 12.24 L12.62 12.16 L12.99 12.04 L13.33 11.87 L13.61 11.64 L13.82 11.36 L13.96 11.03 L14.01 10.68 L14.00 10.30 L13.92 9.92 L13.80 9.55 L13.65 9.20 L13.51 8.87 L13.39 8.57 L13.31 8.28Z"/><circle cx="8" cy="8" r="2"/></symbol>
          <symbol id="i-plus" viewBox="0 0 16 16"><path d="M8 2.2v11.6M2.2 8h11.6"/></symbol>
          <symbol id="i-hand" viewBox="0 0 16 16"><path d="M5.2 8.2V4.3a.9.9 0 0 1 1.8 0V7M7 7V3.1a.9.9 0 0 1 1.8 0V7M8.8 7V3.7a.9.9 0 0 1 1.8 0v5l.6-1.2a.9.9 0 0 1 1.6.7l-1.1 3.3a4 4 0 0 1-3.8 2.7h-.4a3.3 3.3 0 0 1-2.7-1.4L3.2 9.4a.9.9 0 0 1 1.4-1.1z"/></symbol>
          <symbol id="i-mic" viewBox="0 0 16 16"><rect x="5.9" y="1.8" width="4.2" height="7.6" rx="2.1"/><path d="M3.7 7.6a4.3 4.3 0 0 0 8.6 0M8 11.9v2.5"/></symbol>
          <symbol id="i-up" viewBox="0 0 16 16"><path d="M8 13.4V3M3.4 7.6 8 3l4.6 4.6"/></symbol>
          <symbol id="i-chev" viewBox="0 0 10 6"><path d="M1 1.3 5 5 9 1.3"/></symbol>
          <symbol id="i-chip" viewBox="0 0 16 16"><rect x="4" y="4" width="8" height="8" rx="1.6"/><path d="M6.5 1.8V4M9.5 1.8V4M6.5 12v2.2M9.5 12v2.2M1.8 6.5H4M1.8 9.5H4M12 6.5h2.2M12 9.5h2.2"/></symbol>
          <symbol id="i-menucheck" viewBox="0 0 16 16"><path d="m3.5 8 3 3 6-6"/></symbol>
          <symbol id="i-subchev" viewBox="0 0 12 12"><path d="m4.5 2.5 3.5 3.5-3.5 3.5"/></symbol>
          <symbol id="i-deepseek" viewBox="0 0 24 24"><path fill="#4D6BFE" d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 0 1-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 0 0-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 0 1-.465.137 9.597 9.597 0 0 0-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 0 0 1.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 0 1 1.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 0 1 .415-.287.302.302 0 0 1 .2.288.306.306 0 0 1-.31.307.303.303 0 0 1-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 0 1-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 0 1 .016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 0 1-.254-.078.253.253 0 0 1-.114-.358c.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z"/></symbol>
          <symbol id="i-qwen" viewBox="0 0 24 24"><path fill="#615CED" fillRule="evenodd" d="M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z"/></symbol>
          <symbol id="i-kimi" viewBox="0 0 512 512"><g fillRule="evenodd" clipRule="evenodd"><path fill="#000" d="M503 114.333v280c0 60.711-49.29 110-110 110H113c-60.711 0-110-49.289-110-110v-280c0-60.71 49.289-110 110-110h280c60.71 0 110 49.29 110 110z"/><path d="M342.065 189.759c1.886-2.42 3.541-4.63 5.289-6.77.81-1.007.74-1.771-.046-2.824-7.58-9.965-8.298-21.028-3.935-32.254 3.275-8.448 10.52-12.406 19.373-13.25 5.52-.521 10.936.046 15.959 2.73 6.596 3.53 10.438 8.912 11.688 16.341.995 5.926.81 11.712-.868 17.452-2.974 10.161-10.277 15.427-20.287 16.758-8.31 1.11-16.734 1.25-25.113 1.817-.648.046-1.308 0-2.06 0z" fill="#027aff"/><path d="M321.512 144.254h-50.064l-39.637 90.384h-56.036v-89.99H131v232.868h44.787v-98.103h78.973c13.598 0 26.015-7.927 31.744-20.252v118.355h44.787v-98.103c0-23.342-18.239-42.97-41.523-44.671v-.116h-24.593a45.577 45.577 0 0026.884-24.534l29.453-65.838z" fill="#fff"/></g></symbol>
          <symbol id="i-zai" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12.105 2L9.927 4.953H.653L2.83 2h9.276zM23.254 19.048L21.078 22h-9.242l2.174-2.952h9.244zM24 2L9.264 22H0L14.736 2H24z"/></symbol>
        </defs>
      </svg>

      <div className="app">

        {/* sidebar state: checked = minimized (on small screens: checked = open) */}
        <input type="checkbox" className="sb-cb" id="sb-toggle" aria-label="Toggle sidebar" />

        {/* ===== sidebar ===== */}
        <aside className="sidebar" aria-label="Sidebar">
          <div className="chrome">
            <label className="sidebar-close" htmlFor="sb-toggle" aria-label="Close sidebar" title="Close sidebar"><svg className="ic"><use href="#i-toggle"/></svg></label>
            <button type="button" aria-label="Search" title="Search"><svg className="ic"><use href="#i-search"/></svg></button>
          </div>

          <nav className="nav" aria-label="Main">
            <a className="row" href="/"><svg className="ic new-chat-icon"><use href="#i-compose"/></svg><span className="t">New chat</span></a>
            <a className="row" href="#"><svg className="ic"><use href="#i-customize"/></svg><span className="t">Customize</span></a>
            <a className="row" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">Projects</span></a>
            <a className="row" href="#"><svg className="ic"><use href="#i-artifacts"/></svg><span className="t">Artifacts</span></a>
            <a className="row" href="#"><svg className="ic"><use href="#i-chip"/></svg><span className="t">LLMs</span></a>
          </nav>

          {/* Pinned */}
          <section className="sidebar-section l-pinned">
            <input type="checkbox" className="sec-cb" id="sec-pinned" defaultChecked aria-label="Toggle Pinned" />
            <div className="label">
              <label className="section-toggle" htmlFor="sec-pinned">Pinned<svg className="chev"><use href="#i-chev"/></svg></label>
              <span className="sp"><span className="filter-icon" aria-hidden="true"><svg className="ic"><use href="#i-filter"/></svg></span></span>
            </div>
            <div className="section-body"><div className="section-inner">
              <div className="pins">
                <a className="row pin" href="#"><svg className="ic"><use href="#i-pin"/></svg><span className="t">Review and triage issues</span></a>
                <a className="row pin" href="#"><svg className="ic"><use href="#i-pin"/></svg><span className="t">Redesign app modern UI</span></a>
                <a className="row pin" href="#"><svg className="ic"><use href="#i-pin"/></svg><span className="t">Create flow diagram</span></a>
                <a className="row pin" href="#"><svg className="ic"><use href="#i-pin"/></svg><span className="t">Add icons</span></a>
              </div>
            </div></div>
          </section>

          {/* Projects */}
          <section className="sidebar-section l-projects">
            <input type="checkbox" className="sec-cb" id="sec-projects" defaultChecked aria-label="Toggle Projects" />
            <div className="label">
              <label className="section-toggle" htmlFor="sec-projects">Projects<svg className="chev"><use href="#i-chev"/></svg></label>
              <span className="sp">
                <span className="filter-icon" aria-hidden="true"><svg className="ic"><use href="#i-filter"/></svg></span>
                <button type="button" aria-label="New project" title="New project"><svg className="ic"><use href="#i-folder-plus"/></svg></button>
              </span>
            </div>
            <div className="section-body"><div className="section-inner">
              <div className="projs">
                <a className="row proj" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">burger-restaurant</span></a>
                <a className="row proj" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">fitness-tracker</span></a>
                <a className="row proj" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">codex-voxel</span></a>
                <a className="row proj" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">codespottr</span></a>
                <a className="row proj" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">voxel-snake</span></a>
                <a className="row proj" href="#"><svg className="ic"><use href="#i-folder"/></svg><span className="t">jump-and-run</span></a>
              </div>
            </div></div>
          </section>

          {/* Chats */}
          <section className="sidebar-section l-chats">
            <input type="checkbox" className="sec-cb" id="sec-chats" defaultChecked aria-label="Toggle Chats" />
            <div className="label">
              <label className="section-toggle" htmlFor="sec-chats">Chats<svg className="chev"><use href="#i-chev"/></svg></label>
              <span className="sp">
                <span className="filter-icon" aria-hidden="true"><svg className="ic"><use href="#i-filter"/></svg></span>
                <button type="button" aria-label="New chat" title="New chat"><svg className="ic new-chat-icon"><use href="#i-compose"/></svg></button>
              </span>
            </div>
            <div className="section-body"><div className="section-inner">
              <div className="empty">No chats</div>
            </div></div>
          </section>

          <a className="row settings" href="#"><svg className="ic"><use href="#i-gear"/></svg><span className="t">Settings</span></a>
        </aside>

        <label className="sb-backdrop" htmlFor="sb-toggle" aria-hidden="true"></label>

        {/* ===== main ===== */}
        <main className="main">
          <header className="top">
            <label className="sidebar-open" htmlFor="sb-toggle" aria-label="Open sidebar" title="Open sidebar"><svg className="ic"><use href="#i-toggle"/></svg></label>
            <button type="button" className="header-search" aria-label="Search" title="Search"><svg className="ic"><use href="#i-search"/></svg></button>
            <h1>New chat</h1>
          </header>

          <section className="stage">
            <div className="hero">
              <h2>What should we build?</h2>

              <div className="dock">
                {/* open/closed state of the menus */}
                <input type="checkbox" className="menu-cb" id="menu-model" aria-label="Model menu" />
                <input type="checkbox" className="menu-cb" id="menu-perm" aria-label="Permissions menu" />
                {/* click-outside-to-close layers */}
                <label className="backdrop bd-model" htmlFor="menu-model" aria-hidden="true"></label>
                <label className="backdrop bd-perm" htmlFor="menu-perm" aria-hidden="true"></label>

                <div className="composer">
                  <textarea placeholder="Ask Codex anything. @ to use plugins or use files" aria-label="Message" />
                  <div className="tools">
                    <button type="button" className="plus" aria-label="Add"><svg className="ic"><use href="#i-plus"/></svg></button>
                    <span className="grow"></span>

                    {/* ===== model menu ===== */}
                    <div className="menu-wrap model">
                      <label className="menu-trigger trigger-model" htmlFor="menu-model">
                        <svg className="logo lg lg-deepseek" aria-hidden="true"><use href="#i-deepseek"/></svg>
                        <svg className="logo lg lg-qwen" aria-hidden="true"><use href="#i-qwen"/></svg>
                        <svg className="logo lg lg-kimi" aria-hidden="true"><use href="#i-kimi"/></svg>
                        <svg className="logo lg lg-zai" aria-hidden="true"><use href="#i-zai"/></svg>
                        <span className="menu-value">
                          <span className="tn tn-dsv32">DeepSeek V3.2</span><span className="tn tn-qwen3">Qwen3 235B</span><span className="tn tn-kimik2">Kimi K2</span><span className="tn tn-glm46">GLM 4.6</span><span className="tn tn-dsr1">DeepSeek R1</span><span className="tn tn-qwencoder">Qwen3 Coder</span><span className="tn tn-kimithink">Kimi K2 Thinking</span><span className="tn tn-glm45air">GLM 4.5 Air</span>
                          · <span className="te te-low">Low</span><span className="te te-med">Medium</span><span className="te te-high">High</span><span className="te te-xhigh">Extra High</span><span className="te te-off">Thinking off</span>
                        </span>
                      </label>

                      <div className="popup popup-model" role="menu" aria-label="Model settings">
                        <input type="radio" className="menu-radio" name="model" id="m-dsv32" defaultChecked />
                        <label className="menu-option" htmlFor="m-dsv32"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek"/></svg><span className="menu-option-text">DeepSeek V3.2</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                        <input type="radio" className="menu-radio" name="model" id="m-qwen3" />
                        <label className="menu-option" htmlFor="m-qwen3"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen"/></svg><span className="menu-option-text">Qwen3 235B</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                        <input type="radio" className="menu-radio" name="model" id="m-kimik2" />
                        <label className="menu-option" htmlFor="m-kimik2"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi"/></svg><span className="menu-option-text">Kimi K2</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                        <input type="radio" className="menu-radio" name="model" id="m-glm46" />
                        <label className="menu-option" htmlFor="m-glm46"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai"/></svg><span className="menu-option-text">GLM 4.6</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>

                        <div className="model-divider"></div>

                        {/* Effort */}
                        <div className="sub-wrap">
                          <div className="menu-option submenu-trigger" tabIndex="0" role="menuitem" aria-haspopup="menu">
                            <span className="menu-option-text">Effort</span>
                            <span className="submenu-value"><span className="te te-low">Low</span><span className="te te-med">Medium</span><span className="te te-high">High</span><span className="te te-xhigh">Extra High</span><span className="te te-offs">Off</span></span>
                            <svg className="submenu-chevron" aria-hidden="true"><use href="#i-subchev"/></svg>
                          </div>
                          <div className="model-submenu"><div className="sub-box" role="menu" aria-label="Effort">
                            <div className="submenu-note">Choose the reasoning effort. Selecting a level enables Thinking.</div>
                            <input type="radio" className="menu-radio" name="effort" id="eff-low" />
                            <label className="menu-option" htmlFor="eff-low"><span className="menu-option-text">Low</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                            <input type="radio" className="menu-radio" name="effort" id="eff-med" />
                            <label className="menu-option" htmlFor="eff-med"><span className="menu-option-text">Medium</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                            <input type="radio" className="menu-radio" name="effort" id="eff-high" />
                            <label className="menu-option" htmlFor="eff-high"><span className="menu-option-text">High</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                            <input type="radio" className="menu-radio" name="effort" id="eff-xhigh" defaultChecked />
                            <label className="menu-option" htmlFor="eff-xhigh"><span className="menu-option-text">Extra High</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                          </div></div>
                        </div>

                        {/* More models */}
                        <div className="sub-wrap">
                          <div className="menu-option submenu-trigger" tabIndex="0" role="menuitem" aria-haspopup="menu">
                            <span className="menu-option-text">More models</span>
                            <svg className="submenu-chevron" aria-hidden="true"><use href="#i-subchev"/></svg>
                          </div>
                          <div className="model-submenu"><div className="sub-box" role="menu" aria-label="More models">
                            <input type="radio" className="menu-radio" name="model" id="m-dsr1" />
                            <label className="menu-option" htmlFor="m-dsr1"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek"/></svg><span className="menu-option-text">DeepSeek R1</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                            <input type="radio" className="menu-radio" name="model" id="m-qwencoder" />
                            <label className="menu-option" htmlFor="m-qwencoder"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen"/></svg><span className="menu-option-text">Qwen3 Coder</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                            <input type="radio" className="menu-radio" name="model" id="m-kimithink" />
                            <label className="menu-option" htmlFor="m-kimithink"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi"/></svg><span className="menu-option-text">Kimi K2 Thinking</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                            <input type="radio" className="menu-radio" name="model" id="m-glm45air" />
                            <label className="menu-option" htmlFor="m-glm45air"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai"/></svg><span className="menu-option-text">GLM 4.5 Air</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                          </div></div>
                        </div>

                        {/* Capabilities */}
                        <div className="sub-wrap">
                          <div className="menu-option submenu-trigger" tabIndex="0" role="menuitem" aria-haspopup="menu">
                            <span className="menu-option-text">Capabilities</span>
                            <span className="submenu-value"><span className="c0">0/2</span><span className="c1">1/2</span><span className="c2">2/2</span></span>
                            <svg className="submenu-chevron" aria-hidden="true"><use href="#i-subchev"/></svg>
                          </div>
                          <div className="model-submenu"><div className="sub-box" role="menu" aria-label="Capabilities">
                            <input type="checkbox" className="menu-radio" id="cap-vision" defaultChecked />
                            <label className="menu-option" htmlFor="cap-vision" role="menuitemcheckbox"><span className="menu-option-text">Vision<span className="menu-description">Image understanding</span></span><span className="cap-switch" aria-hidden="true"></span></label>

                            {/* Thinking = effort "off" (radio) */}
                            <input type="radio" className="menu-radio" name="effort" id="eff-off" />
                            <div className="menu-option cap-row" role="menuitemcheckbox">
                              <span className="menu-option-text">Thinking<span className="menu-description">Reasoning before responding</span></span>
                              <span className="cap-switch sw-think" aria-hidden="true"></span>
                              <label className="cap-hit hit-off" htmlFor="eff-off" aria-label="Turn thinking off"></label>
                              <label className="cap-hit hit-on" htmlFor="eff-xhigh" aria-label="Turn thinking on"></label>
                            </div>
                          </div></div>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="mic" aria-label="Dictate"><svg className="ic"><use href="#i-mic"/></svg></button>
                    <button type="button" className="send" aria-label="Send"><svg className="ic"><use href="#i-up"/></svg></button>
                  </div>
                </div>

                <div className="ctx">
                  <span className="static-label"><svg className="ic" aria-hidden="true"><use href="#i-folder"/></svg>Project</span>

                  {/* ===== permissions menu ===== */}
                  <div className="menu-wrap perm">
                    <label className="menu-trigger trigger-perm" htmlFor="menu-perm">
                      <svg className="ic" aria-hidden="true"><use href="#i-hand"/></svg>
                      <span className="menu-value"><span className="pv pv-auto">Auto</span><span className="pv pv-manual">Manual</span></span>
                    </label>
                    <div className="popup popup-perm" role="menu" aria-label="Permissions">
                      <div className="menu-heading">Permissions</div>
                      <input type="radio" className="menu-radio" name="perm" id="perm-auto" defaultChecked />
                      <label className="menu-option" htmlFor="perm-auto"><span className="menu-option-text">Auto<span className="menu-description">Automatic permissions</span></span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                      <input type="radio" className="menu-radio" name="perm" id="perm-manual" />
                      <label className="menu-option" htmlFor="perm-manual"><span className="menu-option-text">Manual<span className="menu-description">Review permissions manually</span></span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck"/></svg></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  );
}