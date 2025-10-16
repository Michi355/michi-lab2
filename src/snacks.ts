let snacks=['apple','crackers','yogurt'];
export function printSnacks(): void{
	console.log('snacks');
	snacks.forEach(snack=>console.log(`-${snack}`));
}
printSnacks();

