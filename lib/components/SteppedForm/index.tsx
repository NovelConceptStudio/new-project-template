'use client'
import { Form } from "../Form"
import { useEffect, useState } from "react"
import { heading4, textLarge, textMedium } from "@/foundation/styles"
import { useFormContext } from "react-hook-form"
import Link from "next/link"

type Props = {
    pages: FormPage[]
    submitButton?: React.ReactElement
    classNames?: ClassOverrides
    onSubmit?: (data: any) => void
    errorMessage?: string
    onPageSubmit?: (data: any) => void
    startingIndex?: number
}

type FormPage = {
    names: string[] // The names of the inputs included on the page; used for validation between pages
    page: React.ReactNode
}

type ClassOverrides = {
    form?: string
    stepperContainer?: string
    formPageContainer?: string
    formNavButtonsContainer?: string
}

export function SteppedForm({
    pages,
    classNames = {},
    onPageSubmit = () => null,
    onSubmit = () => null,
    errorMessage,
    startingIndex = 0
}: Props) {
    const [activeStep, setActiveStep] = useState(startingIndex);

    return (
        <Form
            className={`
                flex
                flex-col
                w-full
                gap-8
                items-center
                px-4
                py-8
                sm:px-16
                sm:py-24
                rounded-xl
                bg-gradient-to-br
                from-mikado-yellow-500
                from-[-66%]
                via-mikado-yellow-200
                via-[55%]
                to-chestnut-100
                to-[150%]
                ${classNames.form ?? ''}
            `}
            submitCallback={onSubmit}
        >

            {/* Form stepper */}
            <div className={`flex flex-row ${classNames.stepperContainer ?? ''}`}>
                {pages.map((_, i) => <StepLabel key={`form-stepper-${(i + 1).toString()}`} step={i} activeStep={activeStep} totalSteps={pages.length} />)}
            </div>

            {/* Form page content */}
            <div className={`w-full ${classNames.formPageContainer}`}>
                {pages.map((page, i) => {
                    return (<FormPage
                        key={`form-page-${(i + 1).toString()}`}
                        classNames={classNames}
                        page={page}
                        pageStep={i}
                        activeStep={activeStep}
                        pageCount={pages.length}
                        setActiveStep={setActiveStep}
                        onPageSubmit={onPageSubmit}
                    />)
                })}
            </div>

            {/* Form API submission error */}
            {errorMessage && (
                <span className={`${textLarge} flex w-full justify-center !text-red-600`}>
                    Uh oh, something went wrong. Please try submitting the form again in a little while.
                </span>
            )}
        </Form>
    );
}


type FormPageProps = {
    page: FormPage,
    classNames: ClassOverrides,
    pageStep: number
    activeStep: number
    pageCount: number
    setActiveStep: (step: number) => void
    onPageSubmit: (data: any) => void
}

const FormPage = ({
    page,
    classNames,
    pageStep,
    activeStep,
    pageCount,
    setActiveStep,
    onPageSubmit = () => {}
}: FormPageProps) => {
    const { trigger, formState, getValues } = useFormContext()
    const [formStateTrigger, setFormStateTrigger] = useState(false) // Only used to trigger a re-evaluation of the form state... hack
    const [pageValidated, setPageValidated] = useState(false)

    useEffect(() => {
        // Only set the page to validated if some of the form fields have been changed
        // and the form has no errors on the page
        if (Object.keys(formState.touchedFields).length > 0) {
            let valid = true
            Object.keys(formState.errors).forEach((formError) => {
                if (page.names.includes(formError)) valid = false
            })

            setPageValidated(valid)
        }
    }, [formStateTrigger])

    useEffect(() => {
        if (pageValidated) {
            if (activeStep !== (pageCount - 1)) {
                setActiveStep(activeStep + 1)
                setPageValidated(false)
                onPageSubmit(getValues())
            }
        }
    }, [
        pageValidated,
        setActiveStep
    ])

    return (
        <div className={`${activeStep === pageStep ? 'flex' : 'hidden'} w-full flex-col items-center gap-6`}>
            {/* Form page content */}
            <div className={`w-full ${classNames.formPageContainer}`}>
                {page.page}
            </div>

            {/* Form navigation buttons */}
            <div
                className={`
                flex
                flex-row
                w-full
                justify-between
                px-8
                ${classNames.formNavButtonsContainer ?? ''}
            `}
            >
                {activeStep !== 0 ? (
                    <button
                        type='button'
                        className={`bg-white rounded-full px-6 py-3`}
                        onClick={() => setActiveStep(activeStep - 1)}
                    >
                        Previous
                    </button>
                ) : <div />}
                {activeStep !== (pageCount - 1) && (
                    <button
                        type='button'
                        className={`bg-white rounded-full px-6 py-3`}
                        onClick={async () => {
                            await Promise.all(page.names.map(async (name) => {
                                await trigger(name)
                            })).then(() => {
                                setFormStateTrigger(!formStateTrigger)
                            })
                        }}
                    >
                        Next
                    </button>
                )}
                {activeStep === (pageCount - 1) && (
                    <button
                        type="submit"
                        className={`${textMedium} bg-chestnut-500 text-white-smoke rounded-full px-6 py-3`}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>)
}

type StepLabelProps = {
    step: number // The step represented by this label
    activeStep: number // The user's progress through the form
    totalSteps: number // The total number of all steps in the form flow
}

const StepLabel = ({
    step,
    activeStep,
    totalSteps
}: StepLabelProps) => {
    const generateWrapperStatusClasses = () => {
        let styleClasses = ''
        if (step > activeStep) styleClasses = `bg-white !text-black drop-shadow-lg`
        else if (step === activeStep) styleClasses = `bg-gray-400 drop-shadow-lg`
        else styleClasses = `bg-chestnut-500 drop-shadow-lg`
        return styleClasses;
    }

    const generateTextStatusClasses = () => {
        let styleClasses = ''
        if (step > activeStep) styleClasses = `!text-black`
        else if (step === activeStep) styleClasses = `!text-white-smoke`
        else styleClasses = `!text-white-smoke`
        return styleClasses;
    }

    const generateDividerStatusClasses = () => {
        let styleClasses = ''
        if (step > activeStep) styleClasses = `border-white`
        else if (step === activeStep) styleClasses = `border-white`
        else styleClasses = `border-chestnut-500`
        return styleClasses;
    }

    return (
        <div className={`flex flex-row items-center`}>
            {/* Label */}
            <div
                className={`
                    flex
                    flex-row
                    justify-center
                    text-center
                    items-center
                    w-16
                    aspect-square
                    p-2
                    rounded-full
                    ${generateWrapperStatusClasses()}
                `}
            >
                <p className={`${heading4} ${generateTextStatusClasses()}`}>
                    {(step + 1).toString()}
                </p>
            </div>
            {/* Divider */}
            {(step + 1) !== totalSteps && (
                <div className={`${generateDividerStatusClasses()} w-4 sm:w-8 border-t-4 mx-1 sm:mx-2`}></div>
            )}
        </div>
    )
}

