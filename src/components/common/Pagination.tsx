/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// REACT
import { useMemo } from "react";

import "./pagination.css";

// LOCAL IMPORTS
import { DeviceNames, Devices, useDevice } from "@/hooks/useDevice";

import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from "react-icons/hi2";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number;
  maxPage?: number;
  onPageChange: (page: number) => unknown;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  maxPage,
  onPageChange,
  ...props
}) => {
  const handlePage = (page: number) => {
    onPageChange(page);
  };

  const hasNext = useMemo(() => {
    return (
      parseInt(`${page || 1}`) < parseInt(`${maxPage || Number.MAX_VALUE}`)
    );
  }, [page, maxPage]);

  const hasPrev = useMemo(() => {
    return parseInt(`${page || 1}`) > 1;
  }, [page, maxPage]);

  const hasNext2 = useMemo(() => {
    return (
      parseInt(`${page + 1 || 2}`) < parseInt(`${maxPage || Number.MAX_VALUE}`)
    );
  }, [page, maxPage]);

  const hasPrev2 = useMemo(() => {
    return parseInt(`${page - 1 || 0}`) > 1;
  }, [page, maxPage]);

  const isMobile = useDevice(Devices[DeviceNames.MOBILE]);
  const isTablet = useDevice(Devices[DeviceNames.TABLET]);

  return (
    <div {...props}>
      <div className="row ">
        <div className="col-lg-12">
          <div className="pagition-number text-center">
            <ul>
              <li
                className="crp"
                onClick={hasPrev ? () => handlePage(1) : undefined}
              >
                <HiChevronDoubleLeft />
              </li>
              <li
                className="crp"
                onClick={hasPrev ? () => handlePage(page - 1) : undefined}
                style={{ marginRight: "10px" }}
              >
                <HiChevronLeft />
              </li>

              {hasPrev2 && !isMobile && !isTablet ? (
                <li className="crp">
                  {" "}
                  <a
                    onClick={
                      hasPrev2
                        ? (e) => {
                            e.preventDefault();
                            handlePage(page - 2);
                          }
                        : undefined
                    }
                  >
                    {page - 2}
                  </a>
                </li>
              ) : null}
              {hasPrev && (
                <li className="crp">
                  {" "}
                  <a
                    onClick={
                      hasPrev
                        ? (e) => {
                            e.preventDefault();
                            handlePage(page - 1);
                          }
                        : undefined
                    }
                  >
                    {page - 1}
                  </a>
                </li>
              )}
              <li>
                {" "}
                <div className="current-page">{page || 1}</div>
              </li>
              {hasNext && (
                <li className="crp">
                  <a onClick={hasNext ? () => handlePage(page + 1) : undefined}>
                    {page + 1}
                  </a>
                </li>
              )}
              {hasNext2 && !isMobile && !isTablet ? (
                <li className="crp">
                  {" "}
                  <a
                    onClick={
                      hasNext2
                        ? (e) => {
                            e.preventDefault();
                            handlePage(page + 2);
                          }
                        : undefined
                    }
                  >
                    {page + 2}
                  </a>
                </li>
              ) : null}

              <li
                className="crp"
                onClick={hasNext ? () => handlePage(page + 1) : undefined}
                style={{ marginLeft: "5px" }}
              >
                <HiChevronRight />
              </li>
              <li
                className="crp"
                onClick={
                  hasNext && maxPage ? () => handlePage(maxPage) : undefined
                }
              >
                <HiChevronDoubleRight />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
