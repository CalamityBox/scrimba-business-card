import React from "react"

export default function Profile() {
    return (
        <div className="profile bg-white">
            <div className="name text-center">
                <h2 className="text-bold text-lg spacing-small">Trung Le Nguyen</h2>
                <h4 className="text-regular text-md text-purple spacing-small">Author and Illustrator</h4>
                <p className="text-sm spacing-small">
                    <a href="http://www.trungles.com/about-the-artist">
                        trungles.com/about-the-artist
                    </a>
                </p>
            </div>
            <div className="button-container text-center">
                <button className="bg-purple text-white zoom">
                    Email
                </button>
            </div>
            <div className="about">
                <h3 className="text-semi-bold text-md">About</h3>
                <p className="negative-margin-top">
                Trung Le Capecchi-Nguyen (Trung Le Nguyen, professionally) is a Vietnamese-American comic book artist and writer from Minnesota. He was born in a refugee camp somewhere in the Philippine province of Palawan.
                </p>
                
                <h3 className="text-semi-bold text-md ">Interests</h3>
                <p className="negative-margin-top extra-margin-bottom">
                He currently lives in Minneapolis, Minnesota and raises a small flock of very spoiled hens. He is fond of fairy tales, kids' cartoons, and rom-coms of all stripes.
                </p>
            </div>
        </div>
    )
}