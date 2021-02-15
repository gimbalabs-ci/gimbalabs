import Content from '../components/Content'
import Card from '../components/Card'

function about() {
    return (
        <Content titleText="About Gimbalabs!">
            <div className="md:grid md:grid-cols-3 gap-4">
                <Card>
                    Juliane Montag
                </Card>
                <Card>
                    Roberto Carlos Morano
                </Card>
                <Card>
                    James Dunseith
                </Card>    
            </div>

            <p>Our about page shares our first principals -- AND is ever evolving - catch up</p>
            <p>split page into background and what's the latest</p>
            <p>First Principles</p>
            <p>Our experiments and data</p>
            <p>Our treasury</p>
            <p>Weekly updates - link and present our videos / most recent + link to list</p>
            <p>Github - a collective, link to everyone: WSM, Dandelion, NothingAlike, etc</p>
        </Content>
    )
}

export default about
