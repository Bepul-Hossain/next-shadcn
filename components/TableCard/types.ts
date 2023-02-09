export interface Props extends Table {  }

export interface Table {
    songType: SongType;
    title?: string
    brand?:string
}

export type SongType = 'Listen now' | 'Made for you';