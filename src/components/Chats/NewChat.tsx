import "./newchat.css"

function NewChat() {
  return (
    <>
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
            <button type="button" className="plus" aria-label="Add"><svg className="ic"><use href="#i-plus" /></svg></button>
            <span className="grow"></span>

            {/* ===== model menu ===== */}
            <div className="menu-wrap model">
              <label className="menu-trigger trigger-model" htmlFor="menu-model">
                <svg className="logo lg lg-deepseek" aria-hidden="true"><use href="#i-deepseek" /></svg>
                <svg className="logo lg lg-qwen" aria-hidden="true"><use href="#i-qwen" /></svg>
                <svg className="logo lg lg-kimi" aria-hidden="true"><use href="#i-kimi" /></svg>
                <svg className="logo lg lg-zai" aria-hidden="true"><use href="#i-zai" /></svg>
                <span className="menu-value">
                  <span className="tn tn-dsv32">DeepSeek V3.2</span><span className="tn tn-qwen3">Qwen3 235B</span><span className="tn tn-kimik2">Kimi K2</span><span className="tn tn-glm46">GLM 4.6</span><span className="tn tn-dsr1">DeepSeek R1</span><span className="tn tn-qwencoder">Qwen3 Coder</span><span className="tn tn-kimithink">Kimi K2 Thinking</span><span className="tn tn-glm45air">GLM 4.5 Air</span>
                  · <span className="te te-low">Low</span><span className="te te-med">Medium</span><span className="te te-high">High</span><span className="te te-xhigh">Extra High</span><span className="te te-off">Thinking off</span>
                </span>
              </label>

              <div className="popup popup-model" role="menu" aria-label="Model settings">
                <input type="radio" className="menu-radio" name="model" id="m-dsv32" defaultChecked />
                <label className="menu-option" htmlFor="m-dsv32"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek" /></svg><span className="menu-option-text">DeepSeek V3.2</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                <input type="radio" className="menu-radio" name="model" id="m-qwen3" />
                <label className="menu-option" htmlFor="m-qwen3"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg><span className="menu-option-text">Qwen3 235B</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                <input type="radio" className="menu-radio" name="model" id="m-kimik2" />
                <label className="menu-option" htmlFor="m-kimik2"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi" /></svg><span className="menu-option-text">Kimi K2</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                <input type="radio" className="menu-radio" name="model" id="m-glm46" />
                <label className="menu-option" htmlFor="m-glm46"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai" /></svg><span className="menu-option-text">GLM 4.6</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>

                <div className="model-divider"></div>

                {/* Effort */}
                <div className="sub-wrap">
                  <div className="menu-option submenu-trigger" tabIndex="0" role="menuitem" aria-haspopup="menu">
                    <span className="menu-option-text">Effort</span>
                    <span className="submenu-value"><span className="te te-low">Low</span><span className="te te-med">Medium</span><span className="te te-high">High</span><span className="te te-xhigh">Extra High</span><span className="te te-offs">Off</span></span>
                    <svg className="submenu-chevron" aria-hidden="true"><use href="#i-subchev" /></svg>
                  </div>
                  <div className="model-submenu"><div className="sub-box" role="menu" aria-label="Effort">
                    <div className="submenu-note">Choose the reasoning effort. Selecting a level enables Thinking.</div>
                    <input type="radio" className="menu-radio" name="effort" id="eff-low" />
                    <label className="menu-option" htmlFor="eff-low"><span className="menu-option-text">Low</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                    <input type="radio" className="menu-radio" name="effort" id="eff-med" />
                    <label className="menu-option" htmlFor="eff-med"><span className="menu-option-text">Medium</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                    <input type="radio" className="menu-radio" name="effort" id="eff-high" />
                    <label className="menu-option" htmlFor="eff-high"><span className="menu-option-text">High</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                    <input type="radio" className="menu-radio" name="effort" id="eff-xhigh" defaultChecked />
                    <label className="menu-option" htmlFor="eff-xhigh"><span className="menu-option-text">Extra High</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                  </div></div>
                </div>

                {/* More models 
                <div className="sub-wrap">
                  <div className="menu-option submenu-trigger" tabIndex="0" role="menuitem" aria-haspopup="menu">
                    <span className="menu-option-text">More models</span>
                    <svg className="submenu-chevron" aria-hidden="true"><use href="#i-subchev" /></svg>
                  </div>
                  <div className="model-submenu"><div className="sub-box" role="menu" aria-label="More models">
                    <input type="radio" className="menu-radio" name="model" id="m-dsr1" />
                    <label className="menu-option" htmlFor="m-dsr1"><svg className="menu-logo" aria-hidden="true"><use href="#i-deepseek" /></svg><span className="menu-option-text">DeepSeek R1</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                    <input type="radio" className="menu-radio" name="model" id="m-qwencoder" />
                    <label className="menu-option" htmlFor="m-qwencoder"><svg className="menu-logo" aria-hidden="true"><use href="#i-qwen" /></svg><span className="menu-option-text">Qwen3 Coder</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                    <input type="radio" className="menu-radio" name="model" id="m-kimithink" />
                    <label className="menu-option" htmlFor="m-kimithink"><svg className="menu-logo" aria-hidden="true"><use href="#i-kimi" /></svg><span className="menu-option-text">Kimi K2 Thinking</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                    <input type="radio" className="menu-radio" name="model" id="m-glm45air" />
                    <label className="menu-option" htmlFor="m-glm45air"><svg className="menu-logo" aria-hidden="true"><use href="#i-zai" /></svg><span className="menu-option-text">GLM 4.5 Air</span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
                  </div></div>
                </div> just when more models are available*/}

                {/* Capabilities */}
                <div className="sub-wrap">
                  <div className="menu-option submenu-trigger" tabIndex="0" role="menuitem" aria-haspopup="menu">
                    <span className="menu-option-text">Capabilities</span>
                    <span className="submenu-value"><span className="c0">0/2</span><span className="c1">1/2</span><span className="c2">2/2</span></span>
                    <svg className="submenu-chevron" aria-hidden="true"><use href="#i-subchev" /></svg>
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

            <button type="button" className="mic" aria-label="Dictate"><svg className="ic"><use href="#i-mic" /></svg></button>
            <button type="button" className="send" aria-label="Send"><svg className="ic"><use href="#i-up" /></svg></button>
          </div>
        </div>

        <div className="ctx">
          <span className="static-label"><svg className="ic" aria-hidden="true"><use href="#i-folder" /></svg>Project</span>

          {/* ===== permissions menu ===== */}
          <div className="menu-wrap perm">
            <label className="menu-trigger trigger-perm" htmlFor="menu-perm">
              <svg className="ic" aria-hidden="true"><use href="#i-hand" /></svg>
              <span className="menu-value"><span className="pv pv-auto">Auto</span><span className="pv pv-manual">Manual</span></span>
            </label>
            <div className="popup popup-perm" role="menu" aria-label="Permissions">
              <div className="menu-heading">Permissions</div>
              <input type="radio" className="menu-radio" name="perm" id="perm-auto" defaultChecked />
              <label className="menu-option" htmlFor="perm-auto"><span className="menu-option-text">Auto<span className="menu-description">Automatic permissions</span></span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
              <input type="radio" className="menu-radio" name="perm" id="perm-manual" />
              <label className="menu-option" htmlFor="perm-manual"><span className="menu-option-text">Manual<span className="menu-description">Review permissions manually</span></span><svg className="menu-check" aria-hidden="true"><use href="#i-menucheck" /></svg></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewChat