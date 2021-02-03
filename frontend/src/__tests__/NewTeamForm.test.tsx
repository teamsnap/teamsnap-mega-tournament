import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import NewTeamForm from "../components/NewTeamForm";

describe("New Team Form Tests", () => {
    test("The form should require all fields and block saving until all are filled in", async () => {
        let submit = jest.fn(() => Promise.resolve());
        let baseUrl = "http://backend.localhost";
        let { container } = render(
            <NewTeamForm submitTeam={submit} baseurl={baseUrl} />
        );
        let nameField = screen.getByLabelText("Name");
        let captainFirstName = screen.getByLabelText("Captain First Name");
        let captainLastName = screen.getByLabelText("Captain Last Name");
        let submitButton = container.querySelector('input[type="submit"]');
        expect(nameField).toBeRequired();
        expect(nameField).toBeInvalid();
        expect(captainFirstName).toBeRequired();
        expect(captainFirstName).toBeInvalid();
        expect(captainLastName).toBeRequired();
        expect(captainLastName).toBeInvalid();
        expect(submitButton).toBeDisabled();

        fireEvent.change(nameField, {
            target: { name: "teamName", value: "Lucy's Lullaby's" },
        });
        fireEvent.change(captainFirstName, {
            target: { name: "captainFirstName", value: "Lucy" },
        });
        fireEvent.change(captainLastName, {
            target: { name: "captainLastName", value: "Sims" },
        });

        expect(nameField).toBeValid();
        expect(captainFirstName).toBeValid();
        expect(captainLastName).toBeValid();
        expect(submitButton).not.toBeDisabled();

        fireEvent.click(submitButton as Element);

        await waitFor(() => expect(submit).toHaveBeenCalled());
    });

    test("On submit success, show a success message", async () => {
        let submit = jest.fn(() => Promise.resolve());
        let baseUrl = "http://backend.localhost";
        let { container } = render(
            <NewTeamForm submitTeam={submit} baseurl={baseUrl} />
        );
        let nameField = screen.getByLabelText("Name");
        let captainFirstName = screen.getByLabelText("Captain First Name");
        let captainLastName = screen.getByLabelText("Captain Last Name");
        let submitButton = container.querySelector('input[type="submit"]');

        fireEvent.change(nameField, {
            target: { name: "teamName", value: "Lucy's Lullaby's" },
        });
        fireEvent.change(captainFirstName, {
            target: { name: "captainFirstName", value: "Lucy" },
        });
        fireEvent.change(captainLastName, {
            target: { name: "captainLastName", value: "Sims" },
        });

        fireEvent.click(submitButton as Element);

        await waitFor(() => expect(submit).toHaveBeenCalled());
        expect(
            await screen.findByText("Team registered successfully!")
        ).toBeInTheDocument();
    });

    test("On submit fail, show an error message", async () => {
        let submit = jest.fn(() => Promise.reject());
        let baseUrl = "http://backend.localhost";
        let { container } = render(
            <NewTeamForm submitTeam={submit} baseurl={baseUrl} />
        );
        let nameField = screen.getByLabelText("Name");
        let captainFirstName = screen.getByLabelText("Captain First Name");
        let captainLastName = screen.getByLabelText("Captain Last Name");
        let submitButton = container.querySelector('input[type="submit"]');

        fireEvent.change(nameField, {
            target: { name: "teamName", value: "Lucy's Lullaby's" },
        });
        fireEvent.change(captainFirstName, {
            target: { name: "captainFirstName", value: "Lucy" },
        });
        fireEvent.change(captainLastName, {
            target: { name: "captainLastName", value: "Sims" },
        });

        fireEvent.click(submitButton as Element);

        await waitFor(() => expect(submit).toHaveBeenCalled());
        expect(
            await screen.findByText(
                "An error occurred. Please try again later."
            )
        ).toBeInTheDocument();
    });
});
