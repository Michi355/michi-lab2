let music=['pink pantheress','charli xcx','the marias'];
export function printMusic(): void {
    console.log('music');
    music.forEach(music => console.log(`- ${music}`));
}

printMusic();
