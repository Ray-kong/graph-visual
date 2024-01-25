import * as React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-row items-center w-full h-1/6 bg-secondary border-t-2 border-white mt-4">
      <h3 className="font-bold text-white py-6 pl-4">
        Created by{" "}
        <a href="https://github.com/aidanroche3" className="hover:text-primary">
          Aidan Roche
        </a>{" "}
        and{" "}
        <a href="https://github.com/Ray-kong" className="hover:text-primary">
          Ray Kong
        </a>
      </h3>
      <div className="flex flex-row items-center gap-4 justify-end mr-2 ml-auto">
        <h3 className="text-white">Source on GitHub</h3>
        <a href="https://github.com/Ray-kong/graph-visual">
          <FaGithub
            className="text-white hover:scale-110 ease-in duration-200"
            size={40}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
