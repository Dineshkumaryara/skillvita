/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Search,
  X,
  BarChart2,
  Calendar,
  IndianRupee,
  MapPin,
  LayoutGrid,
  Radio,
} from "lucide-react";

// Shadcn components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface FilterOption {
  value: string;
  count: number;
}

interface FilterConfig {
  [key: string]: string[];
}

interface FilterData {
  fieldId: string;
  options: string[];
  label?: string;
  icon?: React.ReactNode;
}

interface FiltersProps {
  config?: FilterConfig;
  handleFilterChange: (filters: Record<string, FilterData>) => void;
  handleApplyFilters: () => void;
  handleClearAllFilters: () => void;
}

interface Career {
  _id: string;
  category?: string;
  modeOfStudy?: string;
  totalFee?: string;
  duration?: string;
  courseLevel?: string;
  location?: string;
  [key: string]: unknown;
}

// Filter category mapping with icons
const FILTER_CATEGORIES = [
  {
    id: "category",
    label: "Categories",
    icon: <LayoutGrid size={16} className="text-gray-500" />,
  },
  {
    id: "courseLevel",
    label: "Course level",
    icon: <BarChart2 size={16} className="text-gray-500" />,
  },
  {
    id: "totalFee",
    label: "Fee range",
    icon: <IndianRupee size={16} className="text-gray-500" />,
  },
  {
    id: "duration",
    label: "Course Duration",
    icon: <Calendar size={16} className="text-gray-500" />,
  },
  {
    id: "location",
    label: "Location",
    icon: <MapPin size={16} className="text-gray-500" />,
  },
  {
    id: "modeOfStudy",
    label: "Mode of study",
    icon: <Radio size={16} className="text-gray-500" />,
  },
];

const FiltersSection: React.FC<FiltersProps> = ({
  config = {},
  handleFilterChange,
  handleApplyFilters,
  handleClearAllFilters,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, FilterData>
  >({});
  const [filterOptions, setFilterOptions] = useState<
    Record<string, FilterOption[]>
  >({});
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>(""); // Changed initial state to empty string
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Get selected filters for display
  const selectedFilterTags = Object.entries(selectedFilters).flatMap(
    ([category, data]) => data.options.map((option) => ({ category, option }))
  );

  // Initialize from config or fetch from API
  useEffect(() => {
    if (Object.keys(config).length > 0) {
      fetchDataAndProcessConfig(config);
    } else {
      fetchFilterData();
    }
  }, [config]); // Added config as dependency

  const handleCategoryClick = (categoryId: string) => {
    if (activeCategory === categoryId) {
      setActiveCategory("");
      setIsExpanded(false);
    } else {
      setActiveCategory(categoryId);
      setIsExpanded(true);
    }
    setSearchQuery("");
  };

  const handleCancel = () => {
    setSelectedFilters({});
    setSearchQuery("");
    setActiveCategory("");
    setIsExpanded(false);
    handleClearAllFilters();
  };

  // Process provided config data with actual counts
  const fetchDataAndProcessConfig = async (configData: FilterConfig) => {
    setLoading(true);
    try {
      const response = await axios.get<{ results: Career[] }>(
        `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/careers`
      );

      if (
        response.data &&
        response.data.results &&
        Array.isArray(response.data.results)
      ) {
        const careers = response.data.results;

        // Process config with actual counts from data
        const options: Record<string, FilterOption[]> = {};

        Object.entries(configData).forEach(([key, values]) => {
          if (values && Array.isArray(values)) {
            options[key] = values.map((value) => ({
              value,
              count: calculateCount(careers, key, value),
            }));
          }
        });

        setFilterOptions(options);
      }
    } catch (error) {
      console.error("Error fetching data for config processing:", error);
      // Using fallbackFilterData instead of setting an error state
      setFallbackFilterData();
    } finally {
      setLoading(false);
    }
  };

  // Calculate actual count for a filter value
  const calculateCount = (
    data: Career[],
    field: string,
    value: string
  ): number => {
    return data.filter((item) => item[field] === value).length;
  };

  // Fetch filter data from API
  const fetchFilterData = async () => {
    setLoading(true);

    try {
      const response = await axios.get<{ results: Career[] }>(
        `${process.env.NEXT_PUBLIC_BACKEND_LINK}/api/careers`
      );

      if (
        response.data &&
        response.data.results &&
        Array.isArray(response.data.results)
      ) {
        const careers = response.data.results;
        const options = extractFilterOptions(careers);
        setFilterOptions(options);
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (error) {
      console.error("Error fetching filter data:", error);
      // Use fallback data instead of setting an error state
      setFallbackFilterData();
    } finally {
      setLoading(false);
    }
  };

  // Set fallback filter data when API fails
  const setFallbackFilterData = () => {
    setFilterOptions({
      category: [
        { value: "Education & Teaching", count: 125 },
        { value: "Technology", count: 94 },
        { value: "Business", count: 78 },
      ],
      modeOfStudy: [
        { value: "Distance/Correspondence", count: 152 },
        { value: "Offline", count: 97 },
        { value: "Online", count: 48 },
      ],
      totalFee: [
        { value: "<1 L", count: 121 },
        { value: "1-2 L", count: 89 },
        { value: "2-5 L", count: 43 },
      ],
      duration: [
        { value: "6-12", count: 104 },
        { value: "12-24", count: 89 },
        { value: "24-36", count: 57 },
      ],
      courseLevel: [
        { value: "12th", count: 112 },
        { value: "Graduate", count: 95 },
        { value: "Post Graduate", count: 43 },
      ],
      location: [
        { value: "Agartala", count: 18 },
        { value: "Ahmedabad", count: 35 },
        { value: "Aizwal", count: 12 },
        { value: "Aligarh", count: 23 },
        { value: "Andhra Pradesh", count: 42 },
        { value: "Angul", count: 8 },
        { value: "Chandimandir", count: 15 },
        { value: "Jaipur", count: 27 },
        { value: "Kolkata", count: 38 },
        { value: "Lucknow", count: 29 },
      ],
    });
  };

  // Extract unique values for each field with actual counts
  const extractFilterOptions = (
    careers: Career[]
  ): Record<string, FilterOption[]> => {
    const filterFields = [
      "category",
      "modeOfStudy",
      "totalFee",
      "duration",
      "courseLevel",
      "location",
    ];

    const fields: Record<string, Map<string, number>> = {};

    careers.forEach((career) => {
      filterFields.forEach((field) => {
        if (career && career[field]) {
          if (!fields[field]) {
            fields[field] = new Map<string, number>();
          }

          const value = career[field] as string;
          const currentCount = fields[field].get(value) || 0;
          fields[field].set(value, currentCount + 1);
        }
      });
    });

    const options: Record<string, FilterOption[]> = {};

    for (const field in fields) {
      options[field] = Array.from(fields[field].entries())
        .map(([value, count]) => ({ value, count }))
        .filter((option) => option.value)
        .sort((a, b) => a.value.localeCompare(b.value)); // Alphabetical sort
    }

    return options;
  };

  // ✅ Updated to apply filters immediately
  const handleFilterSelection = (category: string, option: string) => {
    const currentCategory = selectedFilters[category] || {
      fieldId: category,
      options: [],
      label:
        FILTER_CATEGORIES.find((cat) => cat.id === category)?.label || category,
    };

    let newOptions: string[];

    if (currentCategory.options.includes(option)) {
      newOptions = currentCategory.options.filter((item) => item !== option);
    } else {
      newOptions = [...currentCategory.options, option];
    }

    const updatedFilters: Record<string, FilterData> = {
      ...selectedFilters,
      [category]: {
        ...currentCategory,
        options: newOptions,
      },
    };

    if (newOptions.length === 0) {
      delete updatedFilters[category];
    }

    setSelectedFilters(updatedFilters);
    handleFilterChange(updatedFilters);
  };

  // Remove selected filter
  const handleRemoveFilter = (category: string, option: string) => {
    handleFilterSelection(category, option);
  };


  // Get filtered options based on search query
  const filteredOptions =
    filterOptions[activeCategory]?.filter(
      (option) =>
        !searchQuery ||
        option.value.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className={`bg-white dark:bg-[#18181B] rounded-lg border border-[#E4E4E7] dark:border-[#27272A] transition-all duration-300 ease-in-out ${isExpanded ? 'w-full md:min-w-[500px]' : 'w-full md:w-[250px]'}`}>
      {/* Header */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          All Filters
        </h3>
      </div>

      {/* Selected filter tags - Only show when expanded */}
      {isExpanded && selectedFilterTags.length > 0 && (
        <div className="flex flex-wrap gap-2 p-4">
          {selectedFilterTags.map(({ category, option }, i) => (
            <Badge
              key={`${category}-${option}-${i}`}
              variant="outline"
              className="flex items-center gap-1 py-1 px-3 rounded-full border border-[#E4E4E7] dark:border-[#27272A]"
            >
              {option}
              <button
                onClick={() => handleRemoveFilter(category, option)}
                className="ml-1 text-gray-500 hover:text-gray-700"
                aria-label={`Remove ${option} filter`}
              >
                <X size={14} />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <Separator className="my-0" />

      {/* Main Content */}
      <div className="flex h-[400px] transition-all duration-300 ease-in-out">
        {/* Sidebar - Categories */}
        <div className={`w-[150px] md:w-[248px] shrink-0 ${isExpanded ? 'border-r border-[#E4E4E7] dark:border-[#27272A]' : ''} transition-all duration-300 ease-in-out`}>
          {FILTER_CATEGORIES.map((category) => {
            const selectedCount = selectedFilters[category.id]?.options?.length || 0;
          
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`w-full flex items-center gap-3 px-4 py-4 text-left transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#F3F5FC] dark:bg-black text-brand-500 border-l-4 border-brand-500"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500/20"
                }`}
              >
                {category.icon}
                <span
                  className={`text-sm truncate ${
                    activeCategory === category.id ? "font-medium" : ""
                  }`}
                >
                  {category.label}
                </span>
                {selectedCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-violet-100 text-violet-800 text-xs"
                  >
                    {selectedCount}
                  </Badge>
                )}
              </button>
            );
          })}
        </div>

        {/* Right - Options List - Only show when expanded */}
        {isExpanded && (
          <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
            {/* Search Input */}
            <div className="p-4 sticky top-0 z-10">
              <div className="relative w-full">
                <Input
                  placeholder={`Search ${
                    activeCategory === "location" ? "location" : activeCategory
                  }`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-3 pr-10 border border-[#E4E4E7] dark:border-[#27272A] w-full"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Filter Options */}
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin h-5 w-5 border-2 border-violet-700 rounded-full border-t-transparent"></div>
                </div>
              ) : filteredOptions.length > 0 ? (
                <div className="space-y-2">
                  {filteredOptions.map((option) => {
                    const isSelected =
                      selectedFilters[activeCategory]?.options?.includes(
                        option.value
                      ) || false;

                    return (
                      <div
                        key={option.value}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center flex-1 min-w-0 pr-2">
                          <Checkbox
                            id={`${activeCategory}-${option.value}`}
                            checked={isSelected}
                            onCheckedChange={() =>
                              handleFilterSelection(activeCategory, option.value)
                            }
                            className={`${
                              isSelected
                                ? "border-violet-600 bg-violet-600 text-white"
                                : "border-gray-300"
                            }`}
                          />
                          <label
                            htmlFor={`${activeCategory}-${option.value}`}
                            className="ml-3 text-sm text-gray-700 dark:text-gray-300 truncate cursor-pointer"
                            title={option.value}
                          >
                            {option.value}
                          </label>
                        </div>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          {option.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-sm text-gray-500">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer - Actions - Only show when expanded */}
      {isExpanded && (
        <div className="p-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex gap-2">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="flex-1 rounded-full"
          >
            Cancel
          </Button>
          <Button
            onClick={handleApplyFilters}
            className="flex-1 bg-brand-500 text-white rounded-full"
          >
            Apply Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FiltersSection;
