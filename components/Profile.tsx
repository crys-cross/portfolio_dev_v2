import Image from "next/image";
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Profile = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div>Profile Pic</div>
      <div>
        <div className="flex flex-col">
          <h2 className="mb-4">
            Hi there, <br />
            I'm Christopher Mariano
          </h2>
          <p>
            I'm a Blockchain Developer. I build and design Smart Contracts /
            Web3 Apps with Solidity. I test and deploy them using
            Javascript/Typescript(Hardhat Environment). I mostly use Nextjs for
            building the UI. Please view some of my projects below. dApp(for the
            dApp site), Code-B(For github backend), Code-F(For github frontend).
            Please also do view my Github if you wish to view my other projects
            and experiments.
          </p>
        </div>
        <div className="flex flex-row">
          <a href="https://github.com/crys-cross">
            <AiFillGithub size="3rem" />
          </a>
          <a href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://twitter.com">
            <AiFillTwitterSquare size="3rem" />
          </a>
          <a href="mariano.christopher123@gmail.com">
            <AiFillMail size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
