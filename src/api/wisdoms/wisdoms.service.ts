import { Injectable } from "@nestjs/common";
import { WisdomsRequest } from "./entities/wisdoms.request";
import { WisdomResponse, WisdomsResponse } from "./entities/wisdoms.response";
import { wisdoms, wisdomParts } from "@const";

@Injectable()
export class WisdomsService {
    getRandomN(l: number) {
        return Math.floor(Math.random() * Math.floor(l)) + 1;
    }

    // randomWisdom = (wisdomList: string[]) => {
    //     const randomIndex = this.getRandomN(wisdomList.length);
    //     //const first = wisdomList[this.getRandomN(wisdomList.length)];
    //     //const second = wisdomList[this.getRandomN(wisdomList.length)];
    //     //const third = wisdomList[this.getRandomN(wisdomList.length)];
    //     //const final = `${first}, ${second}${this.getRandomN(2) === 2 ? `, ${third}` : ""}`.trim().toLowerCase().replace(/\.|!/g, "").replace(/\s{2,}/g, " ") + ".";
    //     //const final = wisdomList[randomIndex].trim().toLowerCase().replace(/\.|!/g, "").replace(/\s{2,}/g, " ") + "."; //modificado para que no modifique el final
    //     const final = wisdomList[randomIndex];

    //     return final;
    // };
    randomWisdom = (wisdomList: string[]) => {
        if (wisdomList.length === 0) {
            return ""; // Otra lógica si la lista está vacía
        }
    
        const randomIndex = this.getRandomN(wisdomList.length);
        const final = wisdomList[randomIndex];
    
        return final;
    };

    async getWisdom(req: WisdomsRequest): Promise<WisdomResponse> {
        const localWisdoms = wisdomParts[req.lang || "en"];
        const randomWisdom = this.randomWisdom(localWisdoms);

        return Promise.resolve({
            wisdom: randomWisdom || "Lying down you can't eat an apple, help yourself and god help you, mind to the ankles."
        });
    }

    async getWisdoms(req: WisdomsRequest): Promise<WisdomsResponse> {
        const localWisdoms = wisdoms[req.lang || "en"];

        return Promise.resolve({
            wisdoms: localWisdoms
        });
    }

}
