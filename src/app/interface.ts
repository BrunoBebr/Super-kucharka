
export interface Recepty {
    id: number;
    nazev: string;
    autor: string;
    suroviny: string;
    cas_pripravy: number;
    skill: string;
    kroky: string;
    hodnoceni: number;
    date: string;
    note: string;
    autor_img: string;
    main_img: string;
}
export interface Postup {
    cas: number;
    nazev: string;
    postup: string ;
}

export interface DeatilRecept {
        id: number;
}

export interface HlavniFotka {
    status: string;
    error: string;
    message:string;
}