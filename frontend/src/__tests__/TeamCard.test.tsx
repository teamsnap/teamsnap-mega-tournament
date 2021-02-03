import React from "react";
import { screen, render } from "@testing-library/react";
import TeamCard from "../components/TeamCard";

describe("Team Card Tests", () => {
    test("The card should display the name and captain name and the first two letters for tha avatar", async () => {
        render(
            <TeamCard
                team={{
                    teamName: "Lucy's Lullaby's",
                    captainFirstName: "Lucy",
                    captainLastName: "Sims",
                }}
            />
        );

        //avatar
        expect(screen.getByText("LL")).toBeInTheDocument();
        //team name
        expect(screen.getByText("Lucy's Lullaby's")).toBeInTheDocument();
        //captain name
        expect(screen.getByText("Lucy Sims")).toBeInTheDocument();
    });

    test("The card should display the name and a message when there is no captain", async () => {
        render(
            <TeamCard
                team={{
                    teamName: "Lions",
                }}
            />
        );

        //avatar, first two letters of team name
        expect(screen.getByText("LI")).toBeInTheDocument();
        //team name
        expect(screen.getByText("Lions")).toBeInTheDocument();
        //captain name
        expect(
            screen.getByText(
                "No Designated Captain. Please Contact Tournament Organizer."
            )
        ).toBeInTheDocument();
    });
});
