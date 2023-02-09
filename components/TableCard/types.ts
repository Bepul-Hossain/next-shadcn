export interface Props extends Table {  }

export interface Table {
    songType?: SongType;
}

export type SongType = 'Listen now' | 'Made for you';