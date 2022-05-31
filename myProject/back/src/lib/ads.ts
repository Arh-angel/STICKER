const ads = [];

export function createAd(newAd) {
  ads.push(newAd);
};

export function getAds() {
  return ads;
}

export function getAd(id) {
  return ads[id];
};

export function getCategory(category: string) {
  return ads.filter(ad => ad.category === category);
};

export function changeAd(id:number, adValue) {
  ads[id] = {
    ...ads[id],
    ...adValue
  };
};

export function deleteAd(id) {
  ads.splice(id, 1);
};