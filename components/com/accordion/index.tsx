import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import styles from './index.module.scss'
type propsType={
    title:string;
}
  export function AccordionDemo(props:propsType) {
    const {title="Is it accessibl?"} = props
    return (
      <Accordion type="single" collapsible className="w-[450px]">
        <AccordionItem value="item-1">
          <AccordionTrigger className={styles.accordionTrig}>{title}</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&#39;
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  