import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Comment } from "./Comment";

@Entity('business')
export class Business extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name:"name"})
    name!: string;

    @Column({name:"direction"})
    direction!: string;

    @Column({name:"city"})
    city!: string;

    @Column({name:"state"})
    state!: string;

    @Column({name:"zip"})
    zip!: string;

    @Column({name:"phone"})
    phone!: string;

    @Column({name:"email"})
    email!: string;

    @Column({name:"web"})
    web!: string;

    @Column({name:"description"})
    description!: string;

    @Column({name:"profile_image"})
    profileImage!: string;

    @Column({name:"facebook_profile"})
    facebookProfile!: string;

    @Column({name:"instagram_profile"})
    instagramProfile!: string;

    @Column({name:"twitter_profile"})
    twitterProfile!: string;

    @Column({name:"lng"})
    lng!: number;

    @Column({name:"lat"})
    lat!: number;

    @Column({name:"created_at"})
    createdAt!: Date;

    @Column({name:"updated_at"})
    updatedAt!: Date;

    @Column({name:"verified"})
    verified!: boolean;

    @Column({name:"verified_at"})
    verifiedAt!: Date;

    @Column({name:"maps_url"})
    mapsUrl!: string;


    ////// RELATIONSHIPS
    // One to many with comments
    @OneToMany(()=> Comment, comment => comment.business)
    comments!: Comment[];    
}