'use client'
import { heading2, textLarge, textSmall } from "@/foundation/styles";
import { Form } from "@/lib/components/Form";
import { SubmitInput } from "@/lib/components/Form/Fields/SubmitInput";
import { TextArea } from "@/lib/components/Form/Fields/TextArea";
import { TextInput } from "@/lib/components/Form/Fields/TextInput";
import { SectionContainer } from "@/lib/layout/SectionContainer";
import { SectionContent } from "@/lib/layout/SectionContent";
import { TwoColumn } from "@/lib/layout/TwoColumn";

export function Components() {
    return (
        <section>
            <SectionContainer className={`flex flex-col gap-8 ${textLarge}`}>
                <div className={`flex flex-col gap-4`}>
                    <h2 className={`${heading2}`}>Components</h2>
                    <p>{`"Components" are block-level or section-level, ready-made UI elements that will likely be used on every single website. The Navbar and Footer components are prime examples of such elements.`}</p>
                    <p>{`Each contain their own logic, each will remain more-or-less the same across projects, and each will likely be used on all websites going forward.`}</p>
                    <p>{`Some component source code can be directly manipulated. In the case of headers and footers, their code should be modified on each project.`}</p>
                    <p>{`Other components are more robust and handle the bulk of the functionality right out of the box. The "Form" component is a good example of this.`}</p>
                    <p>{`The "Form" component's code should be modified sparingly, and should be modified in a general-purpose way. Anytime it's updated in a project, the template version should be updated also.`}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>{`Here's an example of a Form component in action:`}</p>
                    <Form
                        className="flex flex-col gap-2 bg-gray-100 rounded-xl p-4"
                        submitButton={<SubmitInput label={'Submit Form'} />}
                        onSubmit={(data) => {

                            alert(`${data.first_name} ${data.last_name} says "${data.message}"!`)
                            return null
                        }}
                    >
                        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 w-full">
                            <TextInput
                                name={"first_name"}
                                classNames={{
                                    textField: 'w-full',
                                    label: 'text-black',
                                    input: 'border border-gray-300',
                                    errorMessage: `${textSmall} text-red-600`
                                }}
                                placeholder={"Enter your first name"}
                                label={"First Name"}
                                isRequired
                            />
                            <TextInput
                                name={"last_name"}
                                classNames={{
                                    textField: 'w-full',
                                    label: 'text-black',
                                    input: 'border border-gray-300',
                                    errorMessage: `${textSmall} text-red-600`
                                }}
                                placeholder={"Enter your last name"}
                                label={"Last Name"}
                                isRequired
                            />

                        </div>
                        <TextArea
                            name={"message"}
                            classNames={{
                                label: 'text-black',
                                input: 'border border-gray-300',
                                errorMessage: `${textSmall} text-red-600`
                            }}
                            placeholder={"Enter your message"}
                            label={"Message"}
                            isRequired
                        />
                    </Form>
                </div>
            </SectionContainer>
        </section>
    )
}