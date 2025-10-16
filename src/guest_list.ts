let guest=['michi','joe','erik'];
export function printGuests(): void {
    console.log('guests');
    guest.forEach(guest => console.log(`- ${guest}`));
}

printGuests();
