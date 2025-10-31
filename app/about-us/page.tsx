import TeamSection from '@/components/about/TeamSection'
import { advisor, experts, teamMembers } from '@/data/teamData'

export default function AboutUs() {
    return (
        <main>
            <section className="bg-theme_red pt-16 transition-all duration-500">
                <div className="container mx-auto px-4">
                    <h1 className="md:text-5xl text-3xl font-bold text-primary text-center">
                        Meet the Optomists
                    </h1>
                </div>
            </section>
            <TeamSection custom_Class="md:flex-row" data={teamMembers} title="The Team" />
            <TeamSection custom_Class="md:flex-row" data={advisor} title="Our Advisors" />
            <TeamSection custom_Class="md:flex-row-reverse border-2 border-white rounded-[20px] md:p-10 p-6" data={experts} title="Clinical experts" />
        </main>
    )
}
