"use client";
import { Box, Modal, IconButton, Pagination } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const style = {
	width: "100%",
	height: "100%",
	bgcolor: "lightgray",
	border: "none",
	boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};

export default function PDFModal({ open, setOpen, url }) {
	const handleClose = () => {
		setNumPages(0);
		setPageNumber(1);
		setOpen(false);
	};
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<Box sx={style}>
					<IconButton
						onClick={handleClose}
						size="small"
						sx={{
							position: "absolute",
							right: { xs: 5, sm: 50 },
							top: 10,
							zIndex: 2,
							bgcolor: { xs: "gray", sm: "white" },
							boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
							"&:hover": {
								bgcolor: "white",
							},
						}}
					>
						<Close sx={{ color: "red", fontSize: 20 }} />
					</IconButton>
					{url && (
						<Box>
							<Document
								file={url}
								onLoadSuccess={onDocumentLoadSuccess}
								onContextMenu={(e) => e.preventDefault()}
								className={"pdf-container"}
							>
								<Page
									pageNumber={pageNumber}
									renderTextLayer={false}
									height={660}
								/>
							</Document>
							<Box
								sx={{
									position: "absolute",
									bottom: 0,
									left: "50%",
									transform: "translate(-50%, -20%)",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									gap: 2,
									marginTop: 2,
								}}
							>
								<Pagination
									sx={{
										bgcolor: "white",
										borderRadius: 20,
										boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
										padding: { xs: 1.0, sm: 0.5 },
									}}
									size="small"
									color="secondary"
									variant="outlined"
									onChange={(e, value) => setPageNumber(value)}
									count={numPages}
								/>
							</Box>
						</Box>
					)}
				</Box>
			</Modal>
		</div>
	);
}
