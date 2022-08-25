import { getHellfireClubSubscription, subscribeToHellfireClub } from "../firebase/hellfire-club.js";

const txtName = document.getElementById('name');
const txtEmail = document.getElementById('email');
const txtLevel = document.getElementById('level');
const txtCharacter = document.getElementById('character');
const btnSubscribe = document.getElementById('btnSubscribe');
const subscriptionList = document.getElementById('subscriptions');

btnSubscribe.addEventListener('click', async ()=>{
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level:txtLevel.value,
        character:txtCharacter.value
    }
    const subscriptionId = subscribeToHellfireClub(subscription);

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';

    alert(`Inscrito com sucesso: ${subscriptionId}`);
});

async function loadData(){
    const subscriptions = await getHellfireClubSubscription();

    subscriptionList.innerHTML = subscriptions.map(sub =>`
    <li>${sub.name}</li>`
    ).join('');

    console.log(subscriptions)
}
loadData();