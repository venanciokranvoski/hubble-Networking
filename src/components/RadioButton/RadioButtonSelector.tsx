import React from "react";

import { Box } from "../Box/Box";
import { Separator } from "../Separator/Separator";

import { RadioButtomItem } from "./RadioButtonItem";


type ItemTConstraint = Record<string, any>;

export type RadioButtonSelectorProps<T extends ItemTConstraint> = {
    items: T[];
    selectedItem?: T;
    onSelected: (item: T) => void;
    labelKey: keyof T;
    descriptionKey: keyof T;
    valueKey: keyof T;
}

export function RadioButtonSelector<T extends ItemTConstraint>({
    items,
    selectedItem,
    onSelected,
    labelKey,
    descriptionKey,
    valueKey
}: RadioButtonSelectorProps<T>){
    return (
        <Box>
            {items.map((item, index) => (
                <Box key={item.label}>
                    <RadioButtomItem 
                        label={item[labelKey]}
                        description={item[descriptionKey]}
                        onPress={()=> onSelected(item)}
                        isSelected={
                            !!selectedItem && selectedItem[valueKey] === item[valueKey]
                        }
                        />
                    {index < items.length - 1 && <Separator />}
                </Box>
            ))}
        </Box>
    )
}