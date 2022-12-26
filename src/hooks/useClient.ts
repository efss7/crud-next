import { useEffect, useState } from "react"
import { ClientCollection } from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClient() {
    const {
        tableVisible,
        displayForm,
        displayTable } = useTableOrForm()
    const repo: ClientRepository = new ClientCollection()
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            displayTable()
        })

    }

    function clientSelected(client: Client) {
        setClient(client)
        displayForm()
    }

    async function clientDeleted(client: Client) {
        await repo.delete(client)
        getAll()
    }

    async function saveClient(client: Client) {
        await repo.save(client)
        getAll()
    }

    function newClient() {
        setClient(Client.empty())
        displayForm()
    }

    return {
        client,
        clients,
        saveClient,
        newClient,
        clientDeleted,
        clientSelected,
        getAll,
        tableVisible,
        displayTable
    }
}