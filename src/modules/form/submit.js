import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name =  clientName.value.trim()

    if (!name) {
      return alert('Por favor, preencha o nome do cliente.');
    }

    const hourSelected = document.querySelector('.hour-selected');

    if( !hourSelected) {
      return alert('Por favor, selecione um horário disponível.');
    }

    const [hour] = hourSelected.innerText.split(':');
    const when = dayjs(selectedDate.value)
      .add(hour, 'hour')

    const id = new Date().getTime();

    await scheduleNew({ id, name, when })

  } catch (error) {
    alert('Não foi possível realizar o agendamento.')
    console.log(error)
  }
}