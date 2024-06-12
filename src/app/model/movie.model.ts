export interface MPAARating {
    type: string;
    label: string;
}

export interface Movie {
    id: number;
    name: string;
    description: string;
    imgPath: string;
    duration: number;
    genre: string[];
    language: string;
    mpaaRating: MPAARating;
    userRating: string;
}
  