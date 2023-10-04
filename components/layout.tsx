import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
      <div className="bg-primary">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
  );
}
