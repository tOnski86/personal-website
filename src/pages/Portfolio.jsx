import Tabs from '../ui/Tabs';
import Card from '../ui/Card';
import Heading from '../ui/Heading';

function Portfolio() {
  return (
    <Tabs>
      <Tabs.TitleGroup>
        <Tabs.Title opens='tab-1'>Web Design</Tabs.Title>
        <Tabs.Title opens='tab-2'>Content</Tabs.Title>
      </Tabs.TitleGroup>

      <Tabs.ContentGroup>
        <Tabs.Content name='tab-1'>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id harum fugiat unde est, pariatur corrupti quaerat
              expedita necessitatibus? Numquam saepe natus alias nesciunt
              voluptas sint eum sed quaerat autem!
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex
              recusandae eaque autem cupiditate est. Aliquam eum tempora, saepe
              asperiores, laborum maxime, eos iure odio nesciunt provident illum
              aut? Nostrum.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium ex placeat similique error eveniet animi sequi aliquid
              repellat.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis maxime, ex quae vero expedita fugit soluta nemo
              quaerat similique rem?
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              aspernatur beatae repellat veniam debitis ea dignissimos est. Ut
              rerum esse aliquam facere aut voluptatum vitae.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium dolor eligendi magni sed dolorem! Odio suscipit ab
              nesciunt dolores quibusdam rem cum dolor.
            </p>
          </Card>
          <Card>
            <img src='./image-placeholder.jpg' alt='' />
            <Heading as='h3'>Project Name</Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id harum fugiat unde est, pariatur corrupti quaerat
              expedita necessitatibus?
            </p>
          </Card>
        </Tabs.Content>

        <Tabs.Content name='tab-2'>test</Tabs.Content>
      </Tabs.ContentGroup>
    </Tabs>
  );
}

export default Portfolio;
