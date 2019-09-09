import React from "react";

export const Header = () => {
  return (
    <Header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="" alt="todois" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>pizza slice</li>
          </ul>
        </div>
      </nav>
    </Header>
  );
};
