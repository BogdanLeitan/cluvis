import { Link } from "react-router-dom";
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
          <Link className="row" to="/">
            <svg className="ic new-chat-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="#353530"
                  stroke="none"
                />
                <path
                  d="M12 7v10M7 12h10"
                  stroke="#d0d0c7"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </svg>
            <span className="t">New chat</span>
          </Link>

          <a className="row" href="#"><svg className="ic"><use href="#i-customize" /></svg><span className="t">Customize</span></a>
          <a className="row" href="#"><svg className="ic"><use href="#i-folder" /></svg><span className="t">Projects</span></a>

          <a className="row" href="#">
            <svg className="ic">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 1.5 11.2 6.7H4.8Z" />
                <rect x="1.7" y="9" width="4.8" height="4.8" rx=".5" />
                <circle cx="11.4" cy="11.4" r="2.4" />
              </svg>
            </svg>
            <span className="t">Artifacts</span>
          </a>

          <Link className="row" to="/llms">
            <svg className="ic">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2.5 8v5.5h11V8M6.5 13.5V10h3v3.5M1.5 6 3 2.5h10L14.5 6M1.5 6a1.625 1.625 0 0 0 3.25 0 1.625 1.625 0 0 0 3.25 0 1.625 1.625 0 0 0 3.25 0 1.625 1.625 0 0 0 3.25 0M5.5 2.5 4.75 6M8 2.5V6M10.5 2.5 11.25 6" />
              </svg>
            </svg>
            <span className="t">LLMs</span>
          </Link>
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