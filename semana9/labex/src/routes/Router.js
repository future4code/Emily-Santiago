import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AdminHomePage from "../pages/AdminHomePage"
import ApplicationFormPage from "../pages/ApplicationFormPage"
import CreateTripPage from "../pages/CreateTripPage"
import HomePage from "../pages/HomePage"
import ListTripPage from "../pages/ListTripPage"
import LoginPage from "../pages/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/trips/list">
                    <ListTripPage />
                </Route>

                <Route exact path="/trips/application">
                    <ApplicationFormPage />
                </Route>

                <Route exact path="/trips/application">
                    <LoginPage />
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage />
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage />
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router