import React from "react";
const ChatMessages = () => {
    return <div className="ui-chat-messages">
        <header className="ui-chatview-header bg-slate-900 text-center text-white">Header</header>
        <section className="ui-chatview-section">Section</section>
        <footer className="ui-chatview-footer bg-slate-900">Footer</footer>
    </div>
}

export default React.memo(ChatMessages);