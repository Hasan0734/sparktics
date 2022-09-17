import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/Welcome/welcome";

export default function Home() {
  return (
    <div className="bg-[#E6F5FD]">
      <Layout>
        <Welcome />
      </Layout>
    </div>
  );
}
