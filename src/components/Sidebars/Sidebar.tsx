import "./sidebar.css"

function Sidebar() {
  return (
    <>
      {/* sidebar state: checked = minimized (on small screens: checked = open) */}
      <input type="checkbox" className="sb-cb" id="sb-toggle" aria-label="Toggle sidebar" />

      {/* ===== sidebar ===== */}
      <aside className="sidebar" aria-label="Sidebar">
        <div className="chrome">
          <label className="sidebar-close" htmlFor="sb-toggle" aria-label="Close sidebar" title="Close sidebar"><svg className="ic"><use href="#i-toggle" /></svg></label>
          <button type="button" aria-label="Search" title="Search"><svg className="ic"><use href="#i-search" /></svg></button>
        </div>

        <nav className="nav" aria-label="Main">
          <a className="row" href="/"><svg className="ic new-chat-icon"><use href="#i-compose" /></svg><span className="t">New chat</span></a>
          <a className="row" href="#"><svg className="ic"><use href="#i-customize" /></svg><span className="t">Customize</span></a>
          <a className="row" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">Projects</span></a>
          <a className="row" href="#"><svg className="ic"><use href="#i-artifacts" /></svg><span className="t">Artifacts</span></a>
          <a className="row" href="#"><svg className="ic"><use href="#i-chip" /></svg><span className="t">LLMs</span></a>
        </nav>

        {/* Pinned */}
        <section className="sidebar-section l-pinned">
          <input type="checkbox" className="sec-cb" id="sec-pinned" defaultChecked aria-label="Toggle Pinned" />
          <div className="label">
            <label className="section-toggle" htmlFor="sec-pinned">Pinned<svg className="chev"><use href="#i-chev" /></svg></label>
            <span className="sp"><span className="filter-icon" aria-hidden="true"><svg className="ic"><use href="#i-filter" /></svg></span></span>
          </div>
          <div className="section-body"><div className="section-inner">
            <div className="pins">
              <a className="row pin" href="#"><svg className="ic"><use href="#i-pin" /></svg><span className="t">Review and triage issues</span></a>
              <a className="row pin" href="#"><svg className="ic"><use href="#i-pin" /></svg><span className="t">Redesign app modern UI</span></a>
              <a className="row pin" href="#"><svg className="ic"><use href="#i-pin" /></svg><span className="t">Create flow diagram</span></a>
              <a className="row pin" href="#"><svg className="ic"><use href="#i-pin" /></svg><span className="t">Add icons</span></a>
            </div>
          </div></div>
        </section>

        {/* Projects */}
        <section className="sidebar-section l-projects">
          <input type="checkbox" className="sec-cb" id="sec-projects" defaultChecked aria-label="Toggle Projects" />
          <div className="label">
            <label className="section-toggle" htmlFor="sec-projects">Projects<svg className="chev"><use href="#i-chev" /></svg></label>
            <span className="sp">
              <span className="filter-icon" aria-hidden="true"><svg className="ic"><use href="#i-filter" /></svg></span>
              <button type="button" aria-label="New project" title="New project"><svg className="ic"><use href="#i-folder-plus" /></svg></button>
            </span>
          </div>
          <div className="section-body"><div className="section-inner">
            <div className="projs">
              <a className="row proj" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">burger-restaurant</span></a>
              <a className="row proj" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">fitness-tracker</span></a>
              <a className="row proj" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">codex-voxel</span></a>
              <a className="row proj" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">codespottr</span></a>
              <a className="row proj" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">voxel-snake</span></a>
              <a className="row proj" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">jump-and-run</span></a>
            </div>
          </div></div>
        </section>

        {/* Chats */}
        <section className="sidebar-section l-chats">
          <input type="checkbox" className="sec-cb" id="sec-chats" defaultChecked aria-label="Toggle Chats" />
          <div className="label">
            <label className="section-toggle" htmlFor="sec-chats">Chats<svg className="chev"><use href="#i-chev" /></svg></label>
            <span className="sp">
              <span className="filter-icon" aria-hidden="true"><svg className="ic"><use href="#i-filter" /></svg></span>
              <button type="button" aria-label="New chat" title="New chat"><svg className="ic new-chat-icon"><use href="#i-compose" /></svg></button>
            </span>
          </div>
          <div className="section-body"><div className="section-inner">
            <div className="empty">No chats</div>
          </div></div>
        </section>

        <a className="row settings" href="#"><svg className="ic"><use href="#i-gear" /></svg><span className="t">Settings</span></a>
      </aside>

      <label className="sb-backdrop" htmlFor="sb-toggle" aria-hidden="true"></label>
    </>
  );
}

export default Sidebar