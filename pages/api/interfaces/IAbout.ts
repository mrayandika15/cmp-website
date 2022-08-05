interface IAboutUsAsset {
  name?: string;
  imgUrl?: string;
}

interface IDivision {
  name?: string;
  imgUrl?: string;
}

interface IAbout {
  service: IAboutUsAsset[];
  division: IDivision[];
}

export default IAbout;
