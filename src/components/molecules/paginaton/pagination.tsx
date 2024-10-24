import React from "react";
import styles from "./pagination.module.scss";
import Button from "@/components/atoms/button/button";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, paginate }) => {
    return (
        <div className={styles.pagination}>
            <Button
                className={styles.paginationButton}
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
            >
               <MdNavigateBefore/>
            </Button>
            <span>Página {currentPage} de {totalPages}</span>
            <Button
                className={styles.paginationButton}
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
            >
                <MdNavigateNext/>
            </Button>
        </div>
    );
};

export default Pagination;
