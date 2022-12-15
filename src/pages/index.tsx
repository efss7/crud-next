import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const ClientMock = [
    new Client('Eric', 20, '1'),
    new Client('Felipe', 20, '2'),
    new Client('Ueslei', 24, '3'),
    new Client('Igor', 8, '4'),
  ]

  function clientSelected(client: Client) {
    console.log(client.name);
  }
  function clientDeleted(client: Client) {
    console.log(client.name);
  }
  return (
    <div className="flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    ">
      <Layout title="Cadastro Simples">
        <div className="flex justify-end ">
          <Button color="green" className="mb-4" >Novo Cliente</Button>
        </div>
        <Form client={ClientMock[2]} >

        </Form>
      </Layout>
    </div>
  )
}
