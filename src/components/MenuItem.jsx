import React from "react";
import Link from "next/link";

const MenuItem = ({ title, Icon, address }) => {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="upppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
