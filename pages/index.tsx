import { Layout, Text, Page } from "@vercel/examples-ui";
import { Chat } from "../components/Chat";

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6 justify-center items-center">
        <Text variant="h2" className="center text-zinc-100">
          Hello! I'm Chatty
        </Text>
      </section>

      <section className="flex flex-col gap-3 justify-center items-center">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  );
}

Home.Layout = Layout;

export default Home;
