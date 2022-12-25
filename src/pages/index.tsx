import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const ClientMock = [
    new Client('Eric', 20, '1'),
    new Client('Felipe', 20, '2'),
    new Client('Ueslei', 24, '3'),
    new Client('Igor', 8, '4'),
  ]

  function clientSelected(client: Client) {
    setClient(client)
    setVisible('form')
  }
  function clientDeleted(client: Client) {
    console.log(client.name);
  }
  function saveClient(client: Client) {
    console.log(client)
    setVisible('table')
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }
  return (
    <div className="flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    ">
      <Layout title="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end ">
              <Button color="green" className="mb-4" onClick={newClient} >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={ClientMock}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}></Table>
          </>
        ) : (
          <Form
            client={client}
            clientChanged={saveClient}
            canceled={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}
