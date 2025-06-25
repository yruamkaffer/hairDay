import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                name,
                when,
            }),
        });

        alert("Corte agendado com sucesso!");
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar o corte de cabelo.");
    }
}