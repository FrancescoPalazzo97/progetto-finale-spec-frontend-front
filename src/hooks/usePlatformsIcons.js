export const usePlatformsIcons = platformsAvailable => {
    const icons = {
        "PlayStation": "/icons/playstation.svg",
        "Xbox": "/icons/xbox.svg",
        "Nintendo": "/icons/nintendo.svg",
        "PC": "/icons/steam.svg"
    }

    const platformsIcons = [];

    platformsAvailable.forEach(p => platformsIcons.push(icons[p]));

    return platformsIcons;
}