import React from "react";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-14 py-6 gap-3 bg-main text-white">
      <div
        onClick={() => navigate("/")}
        className="px-5 py-1.5 font-bold border-b border-secondary shadow shadow-secondary cursor-pointer"
      >
        <span className="text-secondary">Angga's</span>
        <span> Movies</span>
      </div>
      <div>
        <Input name="search" />
      </div>
      <div className="flex items-center gap-8 text-sm font-semibold">
        <div
          onClick={() => navigate("/all")}
          className="cursor-pointer hover:text-secondary"
        >
          Now Playing
        </div>
        <div
          onClick={() => navigate("/all")}
          className="cursor-pointer hover:text-secondary"
        >
          Popular
        </div>
        <div
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-secondary"
        >
          About Me
        </div>
        <Button
          text="Sign In"
          textColor="text-white"
          textHover="hover:text-secondary"
          bgColor="bg-secondary"
          width="w-[85px]"
          bgHover="hover:bg-main"
        />
      </div>
    </div>
  );
};