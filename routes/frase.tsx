import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = {
  data: string;
}

export const handler: Handlers = {
  GET: async (
    req: Request, 
    ctx: FreshContext<unknown, Data>,
    ) => {
      const response = await Axios.get<Data>(`https://learnyourlesson.deno.dev/`);
      const data = response.data;
      return ctx.render(data); 
    },
  };

const Page = (props: PageProps<Data>) => {
  const data = props.data;
  return (
    <>
    <div id= "gif1"> </div>
    <div class = "Frase">
      <p>{data}</p>
    </div>
    <div id= "gif2"> </div>
    </>
  );
};

export default Page;