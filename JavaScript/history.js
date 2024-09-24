
const history = document.getElementById('history').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('history').classList.add('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('donation').classList.remove('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('donation').classList.add('border-2', 'px-5', 'py-2', 'rounded-lg')


    document.getElementById('input').classList.add('hidden')
    document.getElementById ('history-section').classList.remove('hidden')

})

const donation = document.getElementById('donation')
donation.addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('input').classList.remove('hidden')

    document.getElementById('donation').classList.add('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('history').classList.remove('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('history').classList.add('border-2', 'px-5', 'py-2', 'rounded-lg')
    document.getElementById ('history-section').classList.add('hidden')



})


